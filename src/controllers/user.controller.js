

import User from "../models/user.model.js"
// create user  
export const CreateUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required must"})
        }
        const user = await User.create({
            name,
            email,
            password
        })
        await user.save();  
        res.status(201).json({message:"User created successfully",user}
            
        )
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message})
        console.log(error);     

    }
}

// login user
export const loginUser = async  (req,res)=>{
    try {
        const {email, password}= req.body;
        if(!email  || !password){
            return res.status(400).json({message:"All fields are empty"})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
         if(user.password !== password){
            return res.status(400).json({message: "invalid password"})

         }
          return res.status(201).json({message:"Login successful",
          user})
        } catch (error) {
            return res.status(500).json({message:"Internal server error",
            error:error.message})
        }
}
// update user
export const updateUser = async (req,res)=>{
    try {
      const {id} = req.params;
      const {adress,phone,name,email} = req.body;
      console.log(id,adress,phone,name,email)
       const user = await User.findByIdAndUpdate(
        id,{
        adress,
        phone,
        name,
        email
       },{new:true }) 
       if(!user){
        return res.status(400).json({message:"User not found:"})
       }  

       return res.status(200).json({
        message:"User updated successfully",
        user
       })
    } catch (error) {
        return res.status(500).json({message:"Internal server error",
        error:error.message})
    }
}

// delete user

export const DeletUser = async (req,res)=>{
    try {
        const {id}= req.params;

        const user = await User.findByIdAndDelete(id);
       
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        return res.status(200).json({
            message:"user delete successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            message:"intarnal server error"

        })
    }
}