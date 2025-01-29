# Explanation

## server.js

This file sets up an Express server that listens on port 8085. It uses EJS as the templating engine. The server has three routes:
- `/`: Sends a plain text response "Hello World!".
- `/index`: Renders the `index.ejs` template.
- `/random`: Renders the `random.ejs` template with `data`, `url`, and `student` passed as props.

## index.ejs

This EJS template renders an HTML document with various dynamic content:
- Displays a heading "Hello G24.".
- Declares JavaScript variables `x` and `name`.
- Conditionally renders content based on the value of `x`.
- Loops to render values of `i` and an array `arr`.

## random.ejs

This EJS template renders an HTML document with dynamic content:
- Displays a heading "Hi, I am a random EJS File.".
- Loops through the `data` array and renders each item.
- Renders the value of the `url` variable.