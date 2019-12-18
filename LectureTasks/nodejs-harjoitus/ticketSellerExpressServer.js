var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Header', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var ticketPrices = [{"ticketPrice": 16.00,"saleAmount": {"underSeven": 1,"elderly": 0.5,
        "youngster": 0.5,"MTK": 0.15,"conscript": 0.5,"student": 0.45}}];

app.get('/', function (req, res) {
    res.redirect('/ticketPrices');
});

app.get('/ticketPrices', (req, res) => {
    res.json(ticketPrices);
});

app.listen(8080);
