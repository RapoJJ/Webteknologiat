var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Header', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var todoList = [
    {
        "id": 1,
        "title": "first todo",
        "description": "pick up milk",
        "complete": true,
        "canceled": true,
        "date": 1389878466730
    },
    {
        "id": 2,
        "title": "second todo",
        "description": "send email",
        "complete": false,
        "canceled": false,
        "date": 1389988926901
    },
    {
        "id": 3,
        "title": "third todo",
        "description": "go for a run",
        "complete": false,
        "canceled": false,
        "date": 1389992494240
    }];

app.get('/', function (req, res) {
    res.redirect('/home');
});

app.get('/home', function (req, res) {
    res.send('Moi!');
});

app.get('/tasks', (req, res) => {
    res.json(todoList);
});

app.get('/tasks/:id', (req, res) => {
    var id = req.params.id;

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == id) {
            return res.send(todoList[i]);
        }
    }
    console.log('a');
    res.send("Not Found");
});

app.post('/home', function (req, res) {
    teeJotain(function () {
        res.send('Jotain tehtiin');
    })
});

app.listen(8080);
