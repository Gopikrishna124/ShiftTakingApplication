const Client=require('../../models/Clientmodel').module

const getSingleClient=async(req,res)=>{
    
    const id=req.params.id

    try {
        const result=await Client.findOne({_id:id}).exec()
        res.json({
            data:result,
            message:'fetched client successfully',
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

exports.module=getSingleClient