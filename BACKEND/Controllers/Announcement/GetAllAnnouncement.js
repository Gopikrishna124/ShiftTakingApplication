const Announcement=require('../../models/Announcementmodel').module


const getAllAnnouncements=async(req,res)=>{

    try {
         const result=await Announcement.find({}).sort({createdAt:-1})
         res.json({
            data:result,
            success:true,
            error:false,
            message:'fetched all announcements successfully'
         })
    } catch (err) {
        res.json({
            message:err.message || err,
            success:false,
            error:true
        })
    }
}

exports.module=getAllAnnouncements