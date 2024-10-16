const ejs=require('ejs')
const dotenv=require('dotenv').config()
const path=require('path')
const sendMail=require('../helpers/sendEmail').module
const User=require('../models/Usermodel').module

const announcementEmail=async(title,description)=>{
   
    const users=await User.find({})

     if(users?.length>0){
        for(let user of users){
            ejs.renderFile('templates/announcement.ejs'),
            {title,description},
            async(err,data)=>{
               let messageOptions={
                from:process.env.EMAIL,
                to:user.email,
                subject:`${title}`,
                html:data
               }

               try{
                 await sendMail(messageOptions)
               }catch(err){
                console.log(err)
               }
            }
        }
     }    

}

exports.module=announcementEmail