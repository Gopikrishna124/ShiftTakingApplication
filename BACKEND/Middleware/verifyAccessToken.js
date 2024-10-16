const jwt=require('jsonwebtoken')
const dotenv=require('dotenv').config()


const verifyAccessToken=async(req,res,next)=>{
    
    const authToken=req.headers.token
    try{
    if(authToken){
        const token=authToken.split("")[1]
         jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
             if(err){
                throw new Error('token not valid')
             }
             req.user=user
             next()
         })
    }
    

  }
  catch(err){
    res.status(400).json({
        message:err.message ||err,
        data:[],
        success:false,
        error:true
    })
  }
}

exports.module=verifyAccessToken