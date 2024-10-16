const ejs=require('ejs')
const dotenv=require('dotenv').config()
const path=require('path')
const sendMail=require('../helpers/sendEmail').module

const sendresetPasswordEmail=async(email)=>{
 
    ejs.renderFile('templates/resetPassord.ejs'),
    async(err,data)=>{
        let messageOptions={
            from:process.env.EMAIL,
            to:email,
            subject:'your reset password link',
            html:data
        }
        try {
            await sendMail(messageOptions)
        } catch (error) {
            
        }
    }
}

exports.module=sendresetPasswordEmail