const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendEmail = async (to, subject, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"Tanzania Camping Safaris" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        });
        console.log('Email sent: %s', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};

const emailTemplates = {
    enquiryConfirmation: (name, tourName) => ({
        subject: 'Thank You for Your Enquiry - Tanzania Camping Safaris',
        html: `
            <h2>Thank you for your enquiry, ${name}!</h2>
            <p>We have received your enquiry about the ${tourName} tour.</p>
            <p>Our team will review your request and get back to you within 24 hours.</p>
            <p>Best regards,<br>Tanzania Camping Safaris Team</p>
        `
    }),

    customTripConfirmation: (name) => ({
        subject: 'Custom Trip Request Received - Tanzania Camping Safaris',
        html: `
            <h2>Thank you for your custom trip request, ${name}!</h2>
            <p>We're excited to help you plan your perfect safari adventure.</p>
            <p>Our expert team will carefully review your preferences and create a personalized itinerary for you.</p>
            <p>Best regards,<br>Tanzania Camping Safaris Team</p>
        `
    }),

    adminNotification: (enquiryType, details) => ({
        subject: `New ${enquiryType} Received`,
        html: `
            <h2>New ${enquiryType} Received</h2>
            <p>Details:</p>
            <pre>${JSON.stringify(details, null, 2)}</pre>
        `
    })
};

module.exports = {
    sendEmail,
    emailTemplates
}; 