const Client=require('../../models/Clientmodel').module

const updateClient=async(req,res)=>{
     const id=req.params.id
    try { 
        const result=await Client.findByIdAndUpdate(id,req.body,{new:true})
        res.json({
            data:result,
            message:'client updated successfully',
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
exports.module=updateClient