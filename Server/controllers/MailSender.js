// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     service: "gmail", // Use your email service
//     auth: {
//         user: "pranav.99776gmail.com", // Replace with your email
//         pass: "ebhwbrvwdeejghyc", // Replace with your password or app password
//     },
// });


// exports.sendEmail = async (recipient, subject, text) => {
//     try {
//         const mailOptions = {
//             from: "pranav.99776gmail.com", // Sender address
//             to: recipient, // Recipient email
//             subject: subject, // Email subject
//             text: text, // Email body
//         };

//         await transporter.sendMail(mailOptions);
//         console.log(`Email sent to ${recipient}`);
//     } catch (error) {
//         console.error(`Failed to send email to ${recipient}:`, error);
//     }
// };






const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Gmail's SMTP server
    port: 587, // Port for secure communication
    secure: false, // Use STARTTLS
    auth: {
        user: "pranav.99776@gmail.com", // Replace with your Gmail address
        pass: "ebhwbrvwdeejghyc", // Replace with your App Password
    },
    debug: true, // Enable debug output
    logger: true, // Log all communication
});

exports.sendEmail = async (recipient, subject, text) => {
    try {
        const mailOptions = {
            from: "pranav.99776@gmail.com", // Sender's Gmail address
            to: recipient, // Recipient email address
            subject: subject, // Email subject
            text: text, // Email body
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${recipient}`);
    } catch (error) {
        console.error(`Failed to send email to ${recipient}:`, error.message);
    }
};


