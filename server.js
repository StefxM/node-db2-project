const express = require('express');

const server = express();

server.use(express.json());

server.get('/cars', (req,res) => {
    
})


server.get('/', (req,res) => {
    res.send(`<h1>API is up!</h1>`)
});

module.exports = server;