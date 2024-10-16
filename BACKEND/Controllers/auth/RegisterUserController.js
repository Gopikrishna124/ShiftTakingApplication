const User=require('../../models/Usermodel.js').module
const CryptoJS=require('crypto-js')
const dotenv=require('dotenv').config()
const sendWelcomeEmail=require('../../EmailService/Welcome.js').module

const registerUser=async(req,res)=>{
    
    try {
        const payload={
           userName:req.body.userName,
           email:req.body.email,
           fullName:req.body.fullName,
           phone:req.body.phone,
           address:req.body.address,
           staffId:req.body.staffId,
           gender:req.body.gender,
           documents:[],
           password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET).toString()
        }

        const user=new User(payload)
        const result=await user.save()
        console.log('payload',payload.fullName)

        await sendWelcomeEmail(payload.fullName,req.body.password,payload.staffId,payload.email)
        res.json({
            message:'user registered successfully',
            status:201,
            success:true,
            error:false,
            data:result
        })
    } catch (error) {
        res.json({
            message:error.message || error,
            status:400,
            success:false,
            error:true
        })
    }
}

exports.module=registerUser