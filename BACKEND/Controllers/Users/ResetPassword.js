const User=require('../../models/Usermodel').module
const sendresetPasswordEmail=require('../../EmailService/ResetPassword').module

const resetPassword=async(req,res)=>{
  
    try{
      const requiredEmail=await User.findOne({email:req.body.email})
      if(!requiredEmail){
        throw new Error(' user not registered ')
      }
      await sendresetPasswordEmail(requiredEmail.email)

      res.json({
        message:'check your email for reset password link',
        success:true,
        error:false
      })

    }catch(err){
        res.json({
            message:err.message || err,
            success:false,
            error:true    
        })
        
    }
}

exports.module=resetPassword