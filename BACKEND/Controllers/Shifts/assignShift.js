const Shift=require('../../models/Shiftmodel').module


const assignShift=async(req,res)=>{
    const id=req.params.id
    try {
        const result=await Shift.findByIdAndUpdate(id,req.body,{new:true})
        res.json({
            message:'shift assigned successfully',
            data:result,
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

exports.module=assignShift