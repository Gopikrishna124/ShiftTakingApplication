const Shift=require('../../models/Shiftmodel').module

const getAllShifts=async(req,res)=>{
    try {
        const result=await Shift.find({}).sort({createdAt:-1})
        res.json({
            data:result,
            message:'fetched all shifts',
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

exports.module=getAllShifts