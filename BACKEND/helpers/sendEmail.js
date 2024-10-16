const nodemailer=require('nodemailer')
const dotenv=require('dotenv').config()


const CreateTransporter=(config)=>{
    const transporter=nodemailer.createTransport(config)
    return transporter;
  }

let configurations={
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.APP_PASSWORD
    }
}



const sendMail=async(messageoption)=>{
    const transporter= await CreateTransporter(configurations);
    await transporter.verify();
    await transporter.sendMail(messageoption,(err,info)=>{
        if(err){
            console.log(err)
        }
        console.log(info)
        console.log(info.response)
    })
}
exports.module=sendMail