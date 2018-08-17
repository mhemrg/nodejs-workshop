require('./connectToDB');

const bodyParser = require('body-parser');
const express = require('express');
const User = require('./models/User');

const app = express();

const VALID_TOKEN = 'hello';

app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log('New Request', req.url, req.method);
    next();
});

app.use('/book', function (req, res, next) {
    next();
});

function auth(req, res, next) {
    const { token } = req.query;

    if(token === VALID_TOKEN) {
        next();
    } else {
        res.status(401).json({ result: false });
    }
}

app.get('/about', function (req, res) {
    // throw new Error("BROKEN");
    res.json({ hello: 'world' });
});

app.post('/book/create', auth, function (req, res) {
    res.json({ message: 'successfully created.' });
});

app.post('/register', function (req, res) {
    const { username, password } = req.body;

    User.create({
        username,
        password,
        createdAt: new Date
    }).then(function () {
        res.json({ message: 'user created.' });
    });
});

app.use(function (req, res, next) {
    res.json({ error: '404! Page not found.' });
});

app.use(function (err, req, res, next) {
    res.status(500).json({ error: 'internal server error' });
});

app.listen(3020);