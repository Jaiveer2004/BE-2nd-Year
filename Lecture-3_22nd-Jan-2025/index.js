// Query Parameter
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Jaiveer');
});

// This is a query parameter : how to pass query parameter in URL
app.get('/search', (req, res) => {
    let name = req.query.name; // 
    let age = req.query.age;
    // 'Name' and 'age' have string values
    // To convert them into integer, we can use parseInt() function 

    console.log('Name: ' + name); 
    console.log('Age: ' + age);

    //Fetch data and filter from database and send to client:
    // Here we would join connection with database and fetch data from database (like MongoDB, MySQL, etc.)
    // **************************************************************
    
    let count = 8;
    res.send('Search Result ' + count);
});

app.listen(8085, () => {
  console.log('Server is running on port 8085');
});