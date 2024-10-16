const Incidence=require('../../models/Incidencemodel').module

const getSingleIncidence=async(req,res)=>{
     const id=req.params.id
    try {
        const result=await Incidence.findOne({_id:id}).sort({createdAt:-1})
        res.json({
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

exports.module=getSingleIncidence