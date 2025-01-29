const express = require('express');
const app = express();
const port = 8085;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/random', (req, res) => {
    // data fetch from database or file
    let data = ["apple", "banana", "cherry", "date", "elderberry"];
    let url = req.url;
    let student = {
        name: "John Doe",
        age : 25,
        email: "xyz@gmail.com"
    }
    res.render('random', {data: data, url: url, student: student});
    // Here, (data, url and student) is passed as props
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
