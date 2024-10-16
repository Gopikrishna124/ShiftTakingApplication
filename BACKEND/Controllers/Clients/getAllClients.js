const Client=require('../../models/Clientmodel').module

const getAllClients=async(req,res)=>{
  
    try{
        const result=await Client.find({}).sort({createdAt:-1})
        res.json({
            message:'fetched all clients successfully',
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
exports.module=getAllClients