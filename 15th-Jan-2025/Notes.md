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

3. Create a file `server.js`:
    ```javascript
    // server.js file:

    // Importing express module:
    const express = require('express');

    // Creating an express app:
    const app = express();

    // Creating a route:
    app.get("/", (req, res) => {
        res.send("Hello Frontend");
    });

    // Listening to the server:
    app.listen(8085, () => {
        console.log("Server is running on port 3000");
    });
    ```

## Explanation:

- `const express = require('express');`: Imports the Express module.
- `const app = express();`: Creates an instance of an Express application.
- `app.get("/", (req, res) => { res.send("Hello Frontend"); });`: Defines a route handler for the root URL (`/`). When a GET request is made to the root URL, it sends "Hello Frontend" as the response.
- `app.listen(8085, () => { console.log("Server is running on port 3000"); });`: Starts the server and listens on port 8085. When the server starts, it logs "Server is running on port 3000" to the console.


## How to run:

Run the following command in your terminal:
```sh
node server.js
```