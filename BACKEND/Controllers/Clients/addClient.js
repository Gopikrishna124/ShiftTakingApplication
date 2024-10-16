const Client=require('../../models/Clientmodel').module

const addClient=async(req,res)=>{
  try {
     const client=new Client(req.body)
     const result=await client.save()
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

exports.module=addClient