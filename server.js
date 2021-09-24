const express = require('express');
const app = express();
const path = require('path');
const restfulAPI = require('./restful-API/router');
const port = 443;

// Middlware
app.use(express.static(__dirname + '/dist/swift-media-client'));

// REST
app.use('/api', restfulAPI);

// ANGULAR
app.get('/*', (req, res) => { 
    res.sendFile(path.join(__dirname + '/dist/swift-media-client/index.html'));
});

// Run Server
app.listen(port, () => {
    console.log(`Server Online on port ${port}`);
});