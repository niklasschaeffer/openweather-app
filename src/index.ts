
import 'dotenv/config';
import * as express from 'express';
import * as cors from 'cors';
import axios from 'axios';

var app = express();

app.use(cors());

app.get('/', function (req, res) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Steinbach%20am%20Donnersberg&appid=${process.env.API_KEY}`).then((data) => {
        res.send(data.data);
    });
});

var server = app.listen(process.env.PORT, function () {
    console.log(`Listing on ${process.env.PORT}`);
});