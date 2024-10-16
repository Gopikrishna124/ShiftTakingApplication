const User=require('../../models/Usermodel').module
const UpdatePassword=require('../../EmailService/UpdatePassword').module
const dotenv=require('dotenv').config()
const CryptoJS=require('crypto-js')
const sendUpdatePasswordEmail=require("../../EmailService/UpdatePassword").module

const updatePasswordUser=async(req,res)=>{
     
    try{
      const user=await User.findOne({email:req.body.email})
      if(!user){
        throw new Error('no such email exists')
      }

      if(req.body.password){
        
        let encryptedPassword=CryptoJS.AES.encrypt(req.body.password,process.env.SECRET).toString()
          
      const payload={
        ...req.body,
        password:encryptedPassword
       }
           
       const updatedPassword=await User.findByIdAndUpdate(user._id,payload,{new:true}).exec()

        if(req.body.email &&  req.body.password){
                await sendUpdatePasswordEmail(req.body.email,req.body.password)
        }
       res.json({
        data:updatedPassword,
        success:true,
        error:false,
        message:'user updated successfully'
       })

      }

    }catch(err){
         res.json({
            message:err.message || err,
            success:false,
            error:true
         })
    }
}

exports.module=updatePasswordUser
