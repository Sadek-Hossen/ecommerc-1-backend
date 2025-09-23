
import express from 'express';
import { deleteProduct, getAllProdduct, getByID, productCreate, updateProduct } from '../controllers/product.controller.js';

const router = express.Router()

router.post("/product-create",productCreate);
router.get("/",getAllProdduct)
router.patch("/update-product/:id",updateProduct)
router.delete("/delete-product/:id",deleteProduct)
router.get("/get-product/:id",getByID)
export default router;