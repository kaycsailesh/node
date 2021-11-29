const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dailyguff@gmail.com',
        pass: 'Maxsteel@2'
    }
});

module.exports = {
    verificationEmail(user) {
        const code = user.verificationToken;
        const email = user.email;
        const mailOptions = {
            from: 'dailyguff@gmail.com',
            to: email,
            subject: 'Please verify your XDG Account',
            html: '<p style="text-align: center">'+ code +'</p>'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {

            } else {

            }
        });
    },
}
