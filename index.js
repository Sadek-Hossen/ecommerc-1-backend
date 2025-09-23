import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db.js'
import userRouter from "./src/routers/user.router.js"
import productRouter from "./src/routers/product.router.js"
import orderRouter from "./src/routers/order.router.js"
import blogRouter from "./src/routers/blog.router.js"
dotenv.config()
const app= express()

const port = process.env.PORT || 5000;
const url  = process.env.MONGO_URI;
connectDB({url})    

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/order",orderRouter)
app.use("/api/blog",blogRouter)

//home route
app.get("/",(req,res)=>{
    res.send("<h1>welcome to my smart ecommerce website </h1>")
})



app.listen(port,()=>{
    console.log(`server is running from http://localhost:${port}`)
})

//http://localhost:5000/api/product/delete-product/
