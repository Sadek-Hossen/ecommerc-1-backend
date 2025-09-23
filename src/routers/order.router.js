import express from 'express';
import { createOrder, getOrders } from '../controllers/order.controller.js';

const router = express.Router();


//routes
router.post("/create-order",createOrder)
router.get("/gettin-orders",getOrders)

export default router;