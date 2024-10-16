const User=require('../../models/Usermodel').module
const CryptoJS=require('crypto-js')
const dotenv=require('dotenv').config()
const jwt=require('jsonwebtoken')

const LoginUserController=async(req,res)=>{
  
    try {
        let requiredEmail=await User.findOne({email:req.body.email})
        if(!requiredEmail){
            throw new Error('no such Email exists ')
        }
        if(requiredEmail){
            const hashedPassword=CryptoJS.AES.decrypt(requiredEmail.password,process.env.SECRET)
            
            const originalPassword=hashedPassword.toString(CryptoJS.enc.Utf8)
            

            if(originalPassword!==req.body.password){
                throw new Error('invalid credentails or password')
            }

            const {password, ...info}=requiredEmail._doc
               
            const tokenData={
                _id:requiredEmail._id,
                email:requiredEmail.email,
                role:requiredEmail.role
            }
            const accessToken=await jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:'2hr'})
             const tokenOptions={
                httpOnly:true,
                secure:true
             }
        
             const responseData={...info,accessToken}

            //  res.cookie('AccessShiftToken',accessToken,tokenOptions).json({
            //     data:responseData,
            //     status:200,
            //     success:true,
            //     error:false
            //  })

             
            res.json({
                data:responseData,
                status:200,
                success:true,
                error:false
             })
              
      
        }
         

    } catch (error) {
        
        res.json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
} 

exports.module=LoginUserController
