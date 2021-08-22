// implement your API here

const express = require('express');

const server = express();

// server.use(express.json())


server.get('/', (req, res) => {
    // let myJson = req.body;
    res.send('Hello World');
});


server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 1,
            name: 'Samwise'
        },
        {
            id: 2,
            name: 'Frodo'
        }
    ];

    res.status(200).json(hobbits);

})


server.listen(5000, () => {
    console.log(`server running on port 5000`);
});