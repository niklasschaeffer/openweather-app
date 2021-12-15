"use strict";
exports.__esModule = true;
require("dotenv/config");
var express = require("express");
var cors = require("cors");
var axios_1 = require("axios");
var app = express();
app.use(cors());
app.get('/', function (req, res) {
    axios_1["default"].get("http://api.openweathermap.org/data/2.5/weather?q=Steinbach%20am%20Donnersberg&appid=".concat(process.env.API_KEY)).then(function (data) {
        res.send(data.data);
    });
});
app.post('/clients/new', function (req, res) {
});
var server = app.listen(process.env.PORT, function () {
    console.log("Listing on ".concat(process.env.PORT));
});
