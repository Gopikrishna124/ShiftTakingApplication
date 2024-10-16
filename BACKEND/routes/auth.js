const express=require('express')
const router=express.Router()

const registerUserController=require('../Controllers/auth/RegisterUserController').module
const LoginUserController=require('../Controllers/auth/LoginUserController').module

//registering user

router.post('/register',registerUserController)

//login user

router.post('/login',LoginUserController)

exports.module=router