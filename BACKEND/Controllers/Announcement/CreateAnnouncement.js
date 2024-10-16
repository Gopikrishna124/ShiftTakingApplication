const Announcement=require('../../models/Announcementmodel').module
const announcementEmail=require('../../EmailService/Announcements').module

const createAnnouncement=async(req,res)=>{

    try {
       const announcement=new Announcement(req.body)
       const result=await announcement.save()
       await announcementEmail(req.body.title,req.body.description)
       res.json({
        data:result,
        message:'Announcement sucessfully sent',
        success:false,
        error:true
       })       
 
    } catch (err) {
        res.json({
            message:err.message || err,
            success:false,
            error:true
        })
    }
}


exports.module=createAnnouncement