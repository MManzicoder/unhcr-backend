import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
export const createToken = userId =>{
   return jwt.sign({userId }, process.env.PRIVATE_KEY,{
        expiresIn: "1d"
    })
}

export const emailTransporter = user =>{
    const emailTransporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS
        }
    })
      const sendMailOptions = {
        to: `${user.email}`,
        from: process.env.EMAIL,
        subject: `Hi ${user.username} verify your account`,
        text: ``,
        html: `
        <html>
           <div style="width: 80%; margin: 0 auto;">
                   <p>Hi ${user.username}, You've been created as an admin for unhcr-management system!</p>
                   <a href ="http://localhost:3000/api/auth/verifyaccount/${user.activationcode}" style="color: #fff;  text-decoration:none; margin: 10px 200px; width: 40%; padding: 5px 25px; text-align: center; background: dodgerblue; border-radius: 5px;">Verify your account</a>
           </div>
          </html>
        `
      }

     return emailTransporter.sendMail(sendMailOptions);
}