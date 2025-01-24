// Template Engine : using EJS (Embedded JavaScript)

const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello, Template Engine');
});

app.get('/G24', (req, res) => {
    res.render('index');

});

app.listen(8085, () => {
    console.log('Server is running on port 8085');
});
