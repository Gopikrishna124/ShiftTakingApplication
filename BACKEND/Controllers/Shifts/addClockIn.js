const Shift=require('../../models/Shiftmodel').module

const addClockIn=async(req,res)=>{
    
    const id=req.params.id
    const {time,coords,accuracy}=req.body

    try {
        if(time,coords,accuracy){
            const result=await Shift.findByIdAndUpdate(id,{
              $push:{clockIn:time,coords,accuracy}  
            })

            res.json({
                data:result,
                message:'clock in added successfully',
                success:true,
                error:false
            })
        }

 
    } catch (err) {
        
        res.json({
            message :err.message || err,
            success:false,
            error:true
        })
    }
}

exports.module=addClockIn