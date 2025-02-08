const express = require('express');

const app = express();
const port = 8085;

app.use((req, res, next) => {
    // This is Middleware Function
    console.log('Time: ', Date.now());
    console.log(req.url);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello I will work as a Middleware!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

