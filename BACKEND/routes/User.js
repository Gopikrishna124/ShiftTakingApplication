const express=require('express')
const router=express.Router()

const updatePasswordController=require('../Controllers/Users/UpdatePassword').module
const deleteUserController=require('../Controllers/Users/DeleteUser').module
const getSingleUserController=require('../Controllers/Users/GetSingleUser').module
const gettingAllUsersController=require('../Controllers/Users/GettingAllUsers').module
const resetPasswordController=require('../Controllers/Users/ResetPassword').module

//updating password
router.post('/update-password',updatePasswordController)

//deleting user

router.delete('/:id',deleteUserController)


//get single user 

router.get('/find/:id',getSingleUserController)

//get all users

router.get('/allusers',gettingAllUsersController)

//reset password 

router.post('/reset',resetPasswordController)

exports.module=router