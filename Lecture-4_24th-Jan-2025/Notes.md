# Notes

## Steps to do:

1. Initialize npm:
    ```sh
    npm init
    ```

2. Install Express and EJS:
    ```sh
    npm install express ejs
    ```

3. Create a file [server.js](http://_vscodecontentref_/0):
    ```javascript
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
    ```

4. Create a directory named `views` and inside it create a file `index.ejs`:
    ```html
    <!-- views/index.ejs -->
    <!DOCTYPE html>
    <html>
    <head>
        <title>G24 Page</title>
    </head>
    <body>
        <h1>Welcome to G24 Page</h1>
    </body>
    </html>
    ```

## Explanation:

### server.js

- `const express = require('express');`: Imports the Express module.
- `const app = express();`: Creates an instance of an Express application.
- `app.set('view engine', 'ejs');`: Sets the view engine to EJS, allowing the use of `.ejs` templates.
- `app.get('/', (req, res) => { res.send('Hello, Template Engine'); });`: Defines a route for `/` that sends a plain text response "Hello, Template Engine".
- `app.get('/G24', (req, res) => { res.render('index'); });`: Defines a route for `/G24` that renders the `index.ejs` template located in the `views` directory.
- `app.listen(8085, () => { console.log('Server is running on port 8085'); });`: Starts the server and listens on port 8085. When the server starts, it logs "Server is running on port 8085" to the console.

### views/index.ejs

- `<!DOCTYPE html>`: Declares the document type and version of HTML.
- `<html>`: The root element of the HTML document.
- `<head>`: Contains meta-information about the HTML document, such as the title.
- `<title>G24 Page</title>`: Sets the title of the HTML document to "G24 Page".
- `<body>`: Contains the content of the HTML document.
- `<h1>Welcome to G24 Page</h1>`: Displays a heading with the text "Welcome to G24 Page".

This setup allows you to use EJS as a templating engine to render dynamic content in your Express application.


## What is EJS?

EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It is used to create dynamic HTML content by embedding JavaScript code within the HTML.

### Why do we need EJS?

- **Dynamic Content**: EJS allows you to inject dynamic content into your HTML pages, making it easier to create web pages that change based on data.
- **Separation of Concerns**: By using EJS, you can separate your HTML markup from your server-side logic, making your code more modular and maintainable.
- **Reusability**: EJS templates can be reused across different parts of your application, reducing redundancy and improving consistency.

## What are Views?

Views are templates that are used to render the user interface of your application. They are responsible for displaying the data to the user in a structured and visually appealing manner.

### Why do we need Views?

- **Separation of Logic and Presentation**: Views help separate the presentation layer from the business logic. This makes the code easier to manage and maintain.
- **Reusability**: Views can be reused across different parts of the application, promoting code reuse and consistency.
- **Dynamic Rendering**: Views allow you to dynamically render content based on the data provided by the server, making your application more interactive and responsive to user actions.

In the context of the provided `server.js` file, the `views` directory contains EJS templates that are rendered by the Express application. For example, the `index.ejs` file is a view that is rendered when the `/G24` route is accessed.