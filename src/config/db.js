import mongoose from "mongoose";

export const connectDB =async({url})=>{
    console.log("url",url); 
    try {
        mongoose.connect(url);

    } catch (error) {
        console.log("datatbase connection failed ",error.message);
    }
}