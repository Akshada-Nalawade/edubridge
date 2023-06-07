//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (request, response) {
    // console.log(request);
    response.send("Hello");
});

app.get("/contact", function (req, res) {
    res.send("Contact me on: akshada@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("I am Akshada Nalawade");
});

app.get("/hobbies", function (req, res) {
    res.send("Swimming");
});


app.listen(3000, function () {
    console.log("Server started on port: 3000");
});


