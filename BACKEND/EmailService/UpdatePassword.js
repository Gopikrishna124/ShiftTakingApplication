const ejs=require('ejs')
const dotenv=require('dotenv').config()
const path=require('path')
const sendEmail=require('../helpers/sendEmail').module

const sendUpdatePasswordEmail=async(email,password)=>{
    ejs.renderFile('templates/updatePassword.ejs',
    {password},
    async(err,data)=>{
        let messageOptions={
            from:process.env.EMAIL,
            to:email,
            subject:'You have changed your password',
            html:data
        }
        try {
            await sendEmail(messageOptions)
        } catch (error) {
            console.log(error)
        }
    }
)
}

exports.module=sendUpdatePasswordEmail