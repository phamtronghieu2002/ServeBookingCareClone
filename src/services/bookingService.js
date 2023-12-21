import db from "../../models";
var nodemailer = require('nodemailer');
import { v4 as uuidv4 } from 'uuid';
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'phamhieuproaz@gmail.com',
    pass: 'ruvx yxxk defl cshp'
  }
});


export const insert = async ( fullname, email, address,doctorId,keyID)=>{
try {
    
    const user = await db.User.findOrCreate({
        raw:true,
        where: { email},
        defaults: {
            email,
            address,
            roleID:'R3',
            firstname:fullname,
            positionID:'P'
           
        }
      });
   if(user)
   {
    console.log("user nef :))" ,user);
    const token=uuidv4()
    const booking = await db.Booking.create(
        {
         statusId:'S1',
         doctorId,
         patientId:user[0].id,
         date:Date.now(),
         timeType:keyID,
         token
        },
        { raw: true }
      );
        if(booking)
        {
var mailOptions = {
  from: 'phamhieuproaz@gmail.com',
  to: user[0].email,
  subject: 'Sending Email using Node.js',
  html: `<a href="http://localhost:8081/api/v1/verify?token=${token}"> xác minh</a>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


            return {
                errCode:0,
                data:user,
                message:"ok!"
            }
        }

        return {
            errCode:1,
            data:user,
            message:"create booking fail !!"
        }
   }
} catch (error) {
    
    console.log(error)
}

}