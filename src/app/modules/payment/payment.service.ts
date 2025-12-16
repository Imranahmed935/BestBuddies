import { Request } from "express";
import { prisma } from "../../shared/prisma";
import { stripe } from "../../helpers/stripe";
import Stripe from "stripe";

const createCheckoutSession = async (payload: any) => {
  const { userId, planType } = payload;
  if (!userId || !planType) throw new Error("userId and planType are required");

  let priceId: string | undefined;
  let amount = 0;

  switch (planType) {
    case "WEEKLY":
      priceId = process.env.WEEKLY_PRICE_ID;
      amount = 10;
      break;
    case "MONTHLY":
      priceId = process.env.MONTHLY_PRICE_ID;
      amount = 50;
      break;
    case "YEARLY":
      priceId = process.env.YEARLY_PRICE_ID;
      amount = 100;
      break;
    default:
      throw new Error("Invalid subscription plan");
  }

  if (!priceId) throw new Error("Stripe price ID not configured");

  const payment = await prisma.payment.create({
    data: {
      userId,
      amount,
      paymentGateway: "STRIPE",
      paymentType: planType,
      status: "UNPAID",
    },
  });

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `http://localhost:3000/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/payment/cancel`,
    metadata: {
      paymentId: payment.id,
      userId,
    },
  });
  return { url: session.url };
};

export const handleWebhook = async (req: Request) => {
  const sig = req.headers["stripe-signature"] as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.WEBHOOK_SECRET as string
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err);
    return;
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const paymentId = session.metadata.paymentId;
    const userId = session.metadata.userId;
    const planType = session.metadata.planType;

    if (!paymentId || !userId) {
      console.error("❌ Missing metadata on subscription");
      return;
    }

    await prisma.payment.update({
      where: { id: paymentId },
      data: {
        status: "PAID",
        transactionId: paymentId,
        paymentGateway: "STRIPE",
      },
    });
    await prisma.user.update({
      where: { id: userId },
      data: {
        verified: true,
        subscriptionActive: true,
        subscriptionExpiresAt: calculateExpiry(planType),
      },
    });
  }
};

function calculateExpiry(planType: string) {
  const date = new Date();

  if (planType === "WEEKLY") date.setDate(date.getDate() + 7);
  else if (planType === "MONTHLY") date.setMonth(date.getMonth() + 1);
  else if (planType === "YEARLY") date.setFullYear(date.getFullYear() + 1);

  return date;
}

export const paymentService = {
  createCheckoutSession,
  handleWebhook,
};
