'use strict';

const express = require('express');
const http = require('https');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.sendFile('index.html' , { root : __dirname});;
});

app.get('/api/', (req, res) => {
    res.sendFile('return.json', { root : __dirname});;
});

app.get('/task/', (req, res) => {
    console.log('starting');
    http.get('https://us-central1-plexiform-zone-274808.cloudfunctions.net/Tarea-Backend', (result => {
        console.log('Called');
        console.log(result.statusCode);
        res.sendStatus(result.statusCode);
    }));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
