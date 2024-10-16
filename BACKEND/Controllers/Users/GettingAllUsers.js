const User=require('../../models/Usermodel').module


const gettingAllUsers=async(req,res)=>{
   try{
     const result=await User.find({}).exec()


     res.json({
        data:result,
        success:true,
        error:false,
        message:'fetched all users'
     })
   }
   catch(err){
      res.json({
        message:err.message || err,
        success:false,
        error:true
      })
   }
}

exports.module=gettingAllUsers