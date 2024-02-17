const express = require('express');
const { sendEmail } = require('./WebApplications/Email/email');

const app = express();
const PORT = 3000;
const reportsDir = '/home/harshitar@dayalgroup.hq/Documents/Regression_Project/checko-cypress/cypress/report/mochawesome-report';

app.use('/checko-cypress/cypress/report/mochawesome-report', express.static(reportsDir));

app.post('/send-email', async (req, res) => {
    try {
        const result = await sendEmail();
        console.log('Email sent successfully:', result);
        res.status(200).json({ message: 'Email Sent', result });
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Express server is running on http://localhost:${PORT}`);
});
