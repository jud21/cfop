// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer, { Transporter } from 'nodemailer';
// import SMTPTransport from 'nodemailer/lib/smtp-transport';
// import { Props } from 'next/script';
// import { url } from 'inspector';
// import { TableBody } from '@mui/material';

// export default async function async(
//     req: NextApiRequest,
//     res: NextApiResponse
//   ){
//       console.log(req.body.email)
//     try {
//         let transporter: Transporter = nodemailer.createTransport({
//         	host: 'smtp.gmail.com',
//         	port: 465,
//             auth: {
//               user: 'fakesender38@gmail.com',
//               pass: 'simplepassword',
//             },
//       	});
//         let options = {
//             from: `${req.body.email}`,
//             to: 'joe.d.fallon@gmail.com',
//             subject: `${req.body.subject}`,
//             text: `${req.body.message}`,
//       	};
//        let result: SMTPTransport.SentMessageInfo = 
//        await transporter.sendMail(options);
//        res.status(200);
//     }
//     catch(error){
//     	res.status(400);
//     }
// }

// export default async function sender(
//   name:string, email:string, subject:string, message:string
// ){
//     console.log(email)
//   try {
//       let transporter: Transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//           auth: {
//             user: 'fakesender38@gmail.com',
//             pass: 'simplepassword',
//           },
//       });
//       let options = {
//           from: `${email}`,
//           to: 'joe.d.fallon@gmail.com',
//           subject: `${subject}`,
//           text: `${message}`,
//       };
//      let result: SMTPTransport.SentMessageInfo = 
//      await transporter.sendMail(options);
//      //res.status(200);
//   }
//   catch(error){
//     //res.status(400);
//   }
// }