import {Schema,model} from 'mongoose';  
const OrderSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
        

    },
    price:{
        type:String,
        required:true,
        unique:true
    },
   products:[
    {
         product:{
        type:Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    },
    quantity:{
        type:Number,
        default:1
    },
    },
   ],


    totalPrice:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['pending','shipped','delivered'],
        default:'pending'
    },
},

 {timestamps:true})

const order = model('Order',OrderSchema);
export default order;    