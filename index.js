// implement your API here

const express = require('express');

const server = express();

server.use(express.json())


server.get('/', (req, res) => {
    res.send('Hello World');
});

server.get('/hobbits', (req, res) => {
    res.send('Welcome')
});

server.post('/hobbits', (req, res) => {
    res.status(201).json({url: '/hobbits', operation: 'POST'});
});

server.put('/hobbits', (req, res) => {
    res.status(200).json({url: '/hobbits', operation: 'PUT'});
});

server.delete('/hobbits', (req, res) => {
    res.sendStatus(204);
});


server.listen(5000, () => {
    console.log(`server running on port 5000`);
});