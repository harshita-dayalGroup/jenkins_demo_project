const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const sendEmail = async (recipientEmail) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harshita.rohilla047@gmail.com',
            pass: 'rxhh knlv sbpx xfac', // Use the generated App Password if using two-factor authentication
        },
    });

    const reportsDir = '/home/harshitar@dayalgroup.hq/Documents/Regression_Project/checko-cypress/cypress/report/mochawesome-report';
    const latestReport = await findLatestReport(reportsDir); // Wait for the latest report
    const latestReportFileName = path.basename(latestReport);
    console.log("Sent file => ",latestReportFileName);
    const serverBaseUrl = 'http://192.168.20.248:3000'; // Update with your server's base URL
    const downloadLink = `${serverBaseUrl}/checko-cypress/cypress/report/mochawesome-report/${latestReportFileName}`;

    const mailOptions = {
        from: 'harshita.rohilla047@gmail.com',
        to: 'harshita.rohilla@dayalgroup.com',
        subject: 'Cypress Report After Execution',
        text: `Test mail after Cypress execution. Download the latest report: ${downloadLink}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
    } catch (error) {
        console.error('Error sending email:', error.message);
    }
};

const findLatestReport = (reportDir) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const files = fs.readdirSync(reportDir);
            const htmlReports = files.filter(file => file.endsWith('.html'));
            if (htmlReports.length === 0) {
                reject(new Error('No HTML reports found in the specified directory'));
                return;
            }

            const latestReport = htmlReports.reduce((prev, current) => {
                const prevPath = path.join(reportDir, prev);
                const currentPath = path.join(reportDir, current);

                const prevMtime = fs.statSync(prevPath).mtime.getTime();
                const currentMtime = fs.statSync(currentPath).mtime.getTime();

                return prevMtime > currentMtime ? prev : current;
            });

            resolve(path.join(reportDir, latestReport));
        }, 300);
    });
};

module.exports = { sendEmail };
