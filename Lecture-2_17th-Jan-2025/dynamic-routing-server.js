const express = require('express');
const app = express();

// Middleware to log request details
app.use((req, res, next) => {
    console.log("Middleware 1");
    console.log("Request URL: ", req.url);
    console.log("Request Method: ", req.method);
    console.log("Request Time: ", new Date());
    console.log("Request IP: ", req.ip);
    console.log("Request Host: ", req.hostname);
    next(); // Pass control to the next middleware
});

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/profile/:commentId/:Id', (req, res) => {  
    console.log(req.params);
    // req.params will show the parameters passed in the url
    res.send('commentId: ' + req.params.commentId + ' Id: ' + req.params.Id);
});

app.listen(8085, () => {
    console.log('Server is running on port 8085');
});