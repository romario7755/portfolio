import nodemailer from "nodemailer"
import { NextResponse} from "next/server"

export async function POST(req:Request){

const { name, email,message}= await req.json();

try {
    const transporter = nodemailer.createTransport({
 service:"gmail",
 auth:{
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS,
 }, }
);

    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Message de ${name}',
        text:message,
        html:'<h3>Nouveau message</h3> <p><strong>Nom</strong>${name}</p><p><strong>Email :</strong>${email}</p><p><strong>Message :</strong>${message}</p>',
}); return NextResponse.json({success:true});

} catch (error) {
 console.error(error);
    return NextResponse.json({success:false},{status:500});

} 
}
