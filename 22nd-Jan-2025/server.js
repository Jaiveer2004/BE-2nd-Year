const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Jaiveer');
});

app.get('/about', (req, res) => {
  res.send('Hello About');
});

// For all other routes (Default Route)
app.get('*', (req, res) => {
    res.send('404! Page not found');
});

app.all('*', (req, res) => {
    res.send('404! Page not found');
});

app.listen(8085, () => {
  console.log('Server is running on port 8085');
});