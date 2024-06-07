import express from 'express';
import {registerController,loginController,testController, forgotPasswordController, updateProfileController, blockuserController, unblockuserController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router()

//routing
//REGISTER || POST METHOD
router.post("/register", registerController);

//LOGIN || POST METHOD
router.post("/login", loginController);

//FORGOT PASSWORD
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//PROTECTED USER ROUTE AUTH
router.get('/user-auth', requireSignIn, (req,res)=>{
    res.status(200).send({ok:true})
})

//PROTECTED ADMIN ROUTE AUTH
router.get('/admin-auth', requireSignIn, isAdmin, (req,res)=>{
    res.status(200).send({ok:true})
})

//UPDATE PROFILE
router.put('/update-profile', requireSignIn, updateProfileController);

//Block user
router.put("/block-user:id",requireSignIn, isAdmin,blockuserController);

//Unblock user
router.put("/unblock-user:id",requireSignIn, isAdmin,unblockuserController);



export default router;