import express from 'express'
import { CreateUser, DeletUser, loginUser, updateUser } from '../controllers/user.controller.js'
const router = express.Router()




//routess

router.post("/create-user",CreateUser)
router.post("/login",loginUser)
router.patch("/update-user/:id",updateUser)
router.delete("/delete-user/:id",DeletUser)


export default router;