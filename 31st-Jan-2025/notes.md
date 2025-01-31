### Explanation of Middleware and Request Properties in Express.js

#### Middleware
1. **app.use(express.urlencoded({extended:true}));**
   - This middleware is used to parse incoming requests with URL-encoded payloads.
   - `extended: true` allows for rich objects and arrays to be encoded into the URL-encoded format, using the `qs` library.
   - It is typically used for parsing form data.

2. **app.use(express.json());**
   - This middleware is used to parse incoming requests with JSON payloads.
   - It is typically used for parsing JSON data sent in the body of HTTP requests.

#### Request Properties
1. **req.query**
   - This property is an object containing a property for each query string parameter in the route.
   - It is used to access the query parameters sent in the URL of a GET request.
   - Example: For a URL like `/user?name=John&age=30`, `req.query` would be `{ name: 'John', age: '30' }`.

2. **req.body**
   - This property is an object containing the data sent in the body of the request.
   - It is used to access the data sent in the body of POST requests.
   - The data is parsed by the middleware `express.urlencoded()` and `express.json()`.
   - Example: For a POST request with a JSON body like `{ "name": "John", "age": 30 }`, `req.body` would be `{ name: 'John', age: 30 }`.

### Example Usage in Code
```javascript
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/user', (req, res) => {
    console.log(req.query); // Access query parameters
    res.send('User route and get method');
});

app.post('/user', (req, res) => {
    console.log(req.body); // Access body data
    res.send('User route and post method');
});

app.listen(8085, () => {
    console.log('Server is running on port 8085');
});
```