const nodemailer = require('nodemailer'); 
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', 
    port: 587,                
    secure: false,       
    auth: {
        user: 'your-username',  
        pass: 'your-password' 
    }
});
const mailOptions = {
    from: 'your-email@example.com',         
    to: 'recipient-email@example.com',      
    subject: 'Test Email from Nodemailer',  
    text: 'This is a test email sent from Node.js using Nodemailer.', 
    attachments: [ 
        {
            filename: 'example.txt',            
            content: 'This is the content of the attachment.' 
        }
    ]
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(`Error occurred: ${error.message}`);
        return;
    }
    console.log(`Email sent successfully: ${info.response}`);
});
