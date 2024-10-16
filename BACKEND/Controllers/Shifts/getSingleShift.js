const Shift=require('../../models/Shiftmodel').module

const getSingleShift=async(req,res)=>{
    const id=req.params.id
    try {
        const result=await Shift.findById(id)
        res.json({
            data:result,
            message:'particular shift fetched successfully',
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

exports.module=getSingleShift