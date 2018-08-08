const http = require('http');

const port = 5000;

const requestHandler = (req, res) => {

    if(req.url === '/about') {
        res.write('welcome to about page.');
        res.end();
    } else if(req.url === '/') {
        res.write('<h1>You are in home page.</h1>');
        res.end();
    } else {
        res.write('Page not found.');
        res.end();
    }

};

http.createServer(requestHandler).listen(port);

