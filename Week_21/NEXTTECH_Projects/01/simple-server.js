const express = require('express');
const app = express();
const port = 8000; // don't edit this code

app.get('/', function (req, res) {
    res.send(`On Express server running on port ${port}...`);
});

app.get('/data', function (req, res) {
    // YOUR CODE HERE
    res.send('data will show here...');
});

app.listen(port, function () {
    console.log(`Running on port ${port}...`);
});
