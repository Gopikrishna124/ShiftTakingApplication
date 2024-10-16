const User=require('../../models/Usermodel').module
const dotenv=require('dotenv').config()


const getSingleUser=async(req,res)=>{
     const id=req.params.id
    try {
        const result=await User.findOne({_id:id}).exec()
        const {password,...others}=result._doc
        const responsedata={...others}
        res.json({
            data:responsedata,
            message:'user fetched successfully',
            success:true,
            error:false
        })
    } catch (err) {
          res.json({
            message:err.message || err,
            success:false,
            error:true
          })   
    }

}

exports.module=getSingleUser