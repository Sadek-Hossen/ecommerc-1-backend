import Product from "../models/product.model.js";


//create product
export const  productCreate = async (req,res)=>{
    try {
        const {name,price,category,image, description} = req.body;
        console.log(name,price,category,image, description);
        const product = await Product.create({
            name,
            price,
            category,
            image,
            description
        });
        

        await product.save() 
        return res.status(201).json({
            message:"product create successfully",
            product
        })
       

    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}

// update product

export const updateProduct = async (req,res)=>{
    try {
        const {id}= req.params;
        const {name,price,category,stock, description} = req.body;
        const product = await Product.findByIdAndUpdate(
            id,{
                name,
                price,
                category,
                stock,
                description
            },{new:true}
        )
     if(!product){
        return res.status(404).json({message:"product not found"})

     }
     return res.status(200).json({message:"product updated successfully", product})

    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}

// delete product 
export const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({
                message:"product not found"
            })
        }
        return res.status(200).json({
            message:"product delete successfully",
            product
        })
    } catch (error) {
     return res.status(500).json({
        message:"internal server error",
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

export const getAllProdduct = async (req,res)=>{
    try {
        const products = await Product.find();
        return res.status(201).json({
            message:"all product get successfully",
            products
        })
    } catch (error) {
        
            consol.log(error)
      }

};