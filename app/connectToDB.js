const mongoose = require('mongoose');

const options = { useNewUrlParser: true };
mongoose.connect('mongodb://localhost:27017/node-tuts', options, function (err) {
    if(err) {
        console.error(err);
        console.error('Couldn\'t connect to database.');
    } else {
        console.log('Successfully connected to database.');
    }
});
