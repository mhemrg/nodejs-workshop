const http = require('http');
const fs = require('fs');

const port = 5000;

const requestHandler = (req, res) => {

    if(req.url === '/about') {
        // const aboutContent = fs.readFileSync('./about.html');
        // res.write(aboutContent);
        // res.end();

        fs.readFile('./about.html', function (error, data) {
            res.write(data);
            res.end();
        });
    }

};

http.createServer(requestHandler).listen(port);

