import { Schema,model } from "mongoose";


 const blogModelScema = new Schema({
  title:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   image:{
    type:String,
    required:true
   },
   createdAt:{
    type:Date,
    default:Date.now
   },


})
const Blog = model('Blog',blogModelScema);
export default Blog;