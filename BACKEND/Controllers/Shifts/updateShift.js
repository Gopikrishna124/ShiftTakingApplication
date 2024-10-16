const Shift=require('../../models/Shiftmodel').module

const updateShift=async(req,res)=>{
     const id=req.params.id
     try {
        const result=await Shift.findByIdAndUpdate(id,req.body,{new:true})
        res.json({
            data:result,
            message:'shift updated',
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

exports.module=updateShift