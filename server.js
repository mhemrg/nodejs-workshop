const express = require('express');

const app = express();

app.get('/about', function (req, res) {
    res.json({ hello: 'world' });
});

app.post('/book/create', function (req, res) {
    res.json({ message: 'successfully created.' });
});

app.listen(3020);