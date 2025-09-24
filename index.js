// server.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db.js'
import userRouter from "./src/routers/user.router.js"
import productRouter from "./src/routers/product.router.js"
import orderRouter from "./src/routers/order.router.js"
import blogRouter from "./src/routers/blog.router.js"

dotenv.config()
const app = express()

// Environment variables
const port = process.env.PORT || 5000
const url  = process.env.MONGO_URI

// Connect to MongoDB
connectDB({ url })

// Middleware
app.use(express.json())

// CORS setup for local and live frontend
const allowedOrigins = [
  "http://localhost:3000",                     // Local frontend
  "https://ecommerc1-clientside.netlify.app" // Live frontend URL (replace later)
]

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true) // allow Postman or server requests
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error("CORS block"), false)
    }
    return callback(null, true)
  },
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  credentials: true
}))

// Routes
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/order", orderRouter)
app.use("/api/blog", blogRouter)

// Home route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to my smart ecommerce website</h1>")
})

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

