const express = require('express');
const app = express();
const api = require('./routes/api');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

mongoose.connect("mongodb+srv://MayheMatan:Mayhematan123@cluster0.cp7uu.mongodb.net/GistMD?retryWrites=true&w=majority", { useNewUrlParser: true });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
app.use('/', api);

const port = 5000;
app.listen(port, () => console.log(`Running server on port ${ port }`));
