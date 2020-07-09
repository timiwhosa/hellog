var express = require("express");
var bodyparser = require("body-parser");
var fs = require("fs");
var path = require("path");

var app = express();
var urlencodedParser = bodyparser.urlencoded({ extended: false });
var jsonparser = bodyparser.json();

app.use(express.static(__dirname + "/public"));
var port = process.env.PORT || 3002;


app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/public/home.html"))
});
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/home.html"))
});
app.get("/category", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/category.html"))
});
app.get("/category/:data", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/specific-category.html"))
});
app.get("/category/:data/:cat", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/sub-specific-category.html"))
});

app.get("/single-product/:product", (req,res)=>{
    res.sendFile(path.join(__dirname, "/public/single-product.html"))
});
// REMOVE THIS LATER
app.get("/single-product/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/single-product.html"))
});

app.get("/user-profile", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/user-profile.html"))
});

app.listen(port);