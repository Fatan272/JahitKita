import express from "express";
import upload from "../middleware/upload.js";
import { createOrder, getAllOrders } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", upload.single("gambarReferensi"), createOrder);
router.get("/", getAllOrders);

export default router;
