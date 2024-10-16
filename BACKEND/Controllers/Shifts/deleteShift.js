 const Shift=require('../../models/Shiftmodel').module

 const deleteShift=async(req,res)=>{

    const id=req.params.id
    try {
         const result=await Shift.findByIdAndDelete(id)
         res.json({
            message:'shift deleted successfully',
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

exports.module=deleteShift