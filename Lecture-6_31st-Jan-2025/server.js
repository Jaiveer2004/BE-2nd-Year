const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
   res.render('index')
});

app.get('/user', (req, res) => {
    console.log(req.query);
    console.log('User route and get method');
    res.send('User route and get method');
})

app.post('/user', (req, res) => {
    console.log(req.body);
    console.log('User route and post method');
    res.send('User route and post method');
})

app.listen(8085, () => {
    console.log('Server is running on port 8085');
});