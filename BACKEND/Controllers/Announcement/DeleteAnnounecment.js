 const Announcement=require('../../models/Announcementmodel').module
 

 const deleteAnnouncement=async(req,res)=>{
    const id=req.params.id
     try {
        const result=await Announcement.findByIdAndDelete(id)
        res.json({
            message:'announcement deleted successfully',
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

 exports.module=deleteAnnouncement