// To import (or require) "express" in server.js
const express = require("express");
// console.log(express);
// console.log(typeof express); // -> Function

// To create an instance of express known as "app"
const app = express();
// console.log(app); // -> Function

// To create a route : Home Route
app.get("/", (req, res) => {
  res.send("Hello Frontend");
});

// To create a route : About Route
app.get("/about", (req, res) => {
  res.send("Hello About");
});

// To listen to the server
app.listen(8085, () => {
  console.log("Server is running on port 8085");
});