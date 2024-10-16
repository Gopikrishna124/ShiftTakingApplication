const User=require('../../models/Usermodel').module
const dotenv=require('dotenv').config()


const deleteUser=async(req,res)=>{

    const id=req.params.id
    try {
        const result=await User.findByIdAndDelete(id).exec()
        res.json({
            message:'user deleted successfully',
            success:true,
            error:false
        })
    } catch (error) {
        res.json({
            message:err.message || err,
            success:false,
            error:true
        })
    }
}
exports.module=deleteUser