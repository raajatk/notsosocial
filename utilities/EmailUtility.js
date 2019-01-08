var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: configVariables.emailFrom,
        pass: configVariables.emailPassword
    }
});

module.exports = function (fromEmail, toEmail, subject, emailBody) {
    transporter.sendMail({
        from: fromEmail,
        to: toEmail,
        subject: subject,
        text: emailBody
    })
}
