const Incidence=require('../../models/Incidencemodel').module

const AddIncidence=async(req,res)=>{
  
    try {
        const incidence= new Incidence(req.body)
        const result=await incidence.save()
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

exports.module=AddIncidence