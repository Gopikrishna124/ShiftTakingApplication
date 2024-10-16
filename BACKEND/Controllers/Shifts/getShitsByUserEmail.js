const Shift=require('../../models/Shiftmodel').module

const getShiftsByUser=async(req,res)=>{
    try {
        const result=await Shift.find({staffEmail:req.body.email}).sort({createdAt:-1})
        res.json({
            data:result,
            message:'fetched user shifts successfully',
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

exports.module=getShiftsByUser