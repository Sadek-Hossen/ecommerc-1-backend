import Blog from "../models/blog.model.js";


export const createBlog = async (req,res)=>{
    try {
        const {title,description,image} = req.body;
        console.log(title,description,image);
        const blog = await Blog.create({
            title,
            description,
            image});
        await blog.save();
       return res.status(201).json({
        message:"blog created successfully",
        blog
       })
 
    } catch (error) {
       return res.status(500).json({
           message:"Internal server error",
           error:error.message
       })
    }
}


// get all product 
export const getByID = async (req,res)=>{
    try {
        const  {id} = req.params
        const product = await Product.findById(id)
        if(!product){
        return res.status(404).json({message: "product not found"})
        }

        return res.status(200).json({
            message: "product getting successfully",
            product
        })
    } catch (error) {
      return res.status(500).json({
        message:"internal server error",
        error:error.message
      })   
    }
}

export const getAllBlog = async (req,res)=>{
    try {
        const blogs = await Blog.find();

        console.log(blogs)
        return res.status(201).json({
            message:"all blog get successfully",
            blogs
        })

    } catch (error) {
        console.log(error)
      }

};
