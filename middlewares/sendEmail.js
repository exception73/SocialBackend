const nodeMailer = require('nodemailer');

exports.sendEmail = async (option) => {
    const transporter = nodeMailer.createTransport({
        host : process.env.SMPT_HOST,
        port:process.env.SMPT_PORT,
        auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD,
        },
        service:process.env.SMPT_SERVICE
    });

    const mailOptions = {
        from : process.env.SMPT_MAIL,
        to:option.email,
        subject: option.subject,
        text: option.message,
    }

    await transporter.sendMail(mailOptions);
}

