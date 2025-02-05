const express = require('express');
const app = express();
const port = 8085;

// app.use(express.static('public'));

// Standard way to serve static files
app.use('/static', express.static('public'));
app.use('/assets', express.static('assets'));

app.use('/images', express.static('Images'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send('About Us');
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});
