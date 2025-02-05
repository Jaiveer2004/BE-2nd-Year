const express = require('express');
const app = express();
const port = 8085;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/user', (req, res) => {
    res.render('users.html');
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});