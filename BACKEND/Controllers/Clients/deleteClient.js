const Client=require('../../models/Clientmodel').module

const deleteClient=async(req,res)=>{
    
    const id=req.params.id
    try{
        const result=await Client.findByIdAndDelete(id)
        res.json({
            message:'client deleted successfully',
            data:result,
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

exports.module=deleteClient