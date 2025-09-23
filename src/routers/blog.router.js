
import express from "express"
import { createBlog, getAllBlog } from "../controllers/blog.controller.js"

const router = express.Router()

//routes

router.post("/blog-create",createBlog)
router.get("/getAllBlogs",getAllBlog)


export default router;

