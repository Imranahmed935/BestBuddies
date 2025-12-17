import express from "express";
import { reviewController } from "./review.controller";

const router = express.Router();

router.get("/:id", reviewController.getAllReview);
router.get("/", reviewController.getAllTestimonial);
router.get("/:id", reviewController.getReviewById);
router.post("/create", reviewController.createReview);
router.patch("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

export const reviewRoutes = router;
