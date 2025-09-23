import Order from "../models/order.model.js";


export const createOrder =async (req,res)=>{
    try {
        const {user,price,products,totalPrice} = req.body;
        console.log(user,price,products,totalPrice)

        const order = await Order.create({
        user,price,products,totalPrice
        })
        await order.save()

        return res.status(201).json({
            message:"order create successfully",
            order
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
    }
}

export const getOrders = async (req,res)=>{
    try {
        const orders = await Order.find().populate("user").populate("products.product"); // populate the product details within each order  
        return res.status(200).json({
            message:"order getting successfully",
            orders
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
    }
}