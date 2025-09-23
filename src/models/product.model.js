import {Schema,model} from 'mongoose';  
const ProductSchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,

    },
    description:{
        type:String,
    }
})

const Product = model('Product',ProductSchema);
export default Product;    