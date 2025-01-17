# Notes

## Steps to do:

1. Initialize npm:
    ```sh
    npm init
    ```

2. Install Express:
    ```sh
    npm install express
    ```

3. Create a file [server.js](http://_vscodecontentref_/0):
    ```javascript
    // server.js file:

    // Importing express module:
    const express = require('express');

    // Creating an express app:
    const app = express();

    // Middleware to log request details:
    app.use((req, res, next) => {
        console.log("Middleware 1");
        console.log("Request URL: ", req.url);
        console.log("Request Method: ", req.method);
        console.log("Request Time: ", new Date());
        console.log("Request IP: ", req.ip);
        console.log("Request Host: ", req.hostname);
        next(); // Pass control to the next middleware
    });

    // Creating routes:
    app.get('/', (req, res) => {
        res.send('Home Page');
    });

    app.get('/about', (req, res) => {
        res.send('About Page');
    });

    // Listening to the server:
    app.listen(8085, () => {
        console.log('Server is running on port 8085');
    });
    ```

4. Create a file [dynamic-routing-server.js](http://_vscodecontentref_/1):
    ```javascript
    // dynamic-routing-server.js file:

    // Importing express module:
    const express = require('express');

    // Creating an express app:
    const app = express();

    // Middleware to log request details:
    app.use((req, res, next) => {
        console.log("Middleware 1");
        console.log("Request URL: ", req.url);
        console.log("Request Method: ", req.method);
        console.log("Request Time: ", new Date());
        console.log("Request IP: ", req.ip);
        console.log("Request Host: ", req.hostname);
        next(); // Pass control to the next middleware
    });

    // Creating routes:
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

    // Listening to the server:
    app.listen(8085, () => {
        console.log('Server is running on port 8085');
    });
    ```

## Explanation:

### [server.js](http://_vscodecontentref_/2)

- [const express = require('express');](http://_vscodecontentref_/3): Imports the Express module.
- [const app = express();](http://_vscodecontentref_/4): Creates an instance of an Express application.
- Middleware function logs the HTTP method, URL, time, IP, and hostname for each request.
- Defines routes for `/` and `/about` URLs.
- Starts the server and listens on port 8085.

### [dynamic-routing-server.js](http://_vscodecontentref_/5)

- Similar to [server.js](http://_vscodecontentref_/6) but includes an additional route with dynamic parameters.
- Defines a route for `/profile/:commentId/:Id` which captures [commentId](http://_vscodecontentref_/7) and [Id](http://_vscodecontentref_/8) from the URL and logs them.
- Responds with the captured parameters.

## How to run:

Run the following command in your terminal:
```javascript
    node server.js
```

Open your browser and navigate to [http://localhost:8085](http://localhost:8085) to see the home page.
