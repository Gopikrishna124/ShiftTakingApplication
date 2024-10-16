const ejs=require('ejs')
const dotenv=require('dotenv').config()
const path=require('path')
const sendMail=require('../helpers/sendEmail').module

const templatePath= path.join('Users','User','Desktop','SHIFT TRACKING APPlication','BACKEND','templates','welcome.ejs')

const sendWelcomeEmail=async(fullName,password,staffId,email)=>{
    
    ejs.renderFile(
        "templates/welcome.ejs",
        {fullName,staffId,password},
        async(err,data)=>{
            let messageoption={
                from:process.env.EMAIL,
                to:email,
                subject:'Welcome to AM Shifter',
                html:data
            }

            try {
               sendMail(messageoption)

            } catch (error) {
              console.log(error)  
            }
        }
    )
}

exports.module=sendWelcomeEmail