import express, { Application } from "express"
import cors from "cors"
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import cookieParser from "cookie-parser";
import router from "./app/routes/routes";
import { paymentController } from "./app/modules/payment/payment.controller";
import config from "./config";

export const app : Application = express();



app.use(cors({
    origin: config.frontend_url,
    credentials: true,
  }))

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  paymentController.handleWebhook
);

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1", router);


app.get("/", (req, res)=>{
    res.send("The server is running")
})

app.use(globalErrorHandler)
app.use(notFound)

