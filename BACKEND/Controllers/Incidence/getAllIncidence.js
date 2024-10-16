const Incidence=require('../../models/Incidencemodel').module

const getAllIncidence=async(req,res)=>{
  
    try{
      const result=await Incidence.find({}).sort({createdAt:-1})
      res.json({
        data:result,
        message:'fetched all incidences successfully',
        success:true,
        error:false
      })
    }
    catch(err){
       res.json({
        message:err.message || err,
        success:false,
        error:true
       })
    }
}

exports.module=getAllIncidence