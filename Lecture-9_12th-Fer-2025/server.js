const express = require('express');

const app = express();
const port = 3001;

// This will check if OTP is correct or not
const verifyOTP = (req, res, next) => {
    if(req.query.otp === '1234') {
        console.log('OTP Verified');
        next();
    } else {
        console.log('OTP Not Verified');
        res.send('OTP Not Verified');
    }
};      

// http://localhost:3001/payment?otp=1234 will give you the output as OTP Verified

// Universal Middleware : It will run on every request
app.use((req, res, next) => {
    console.log('Universal Middleware');
    next();
});

// Used to check if payment is successful or not
app.use('/payment', verifyOTP, (req, res, next) => {
    console.log('Payment Middleware');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/payment', (req, res) => {
    res.send('Payment Page');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});