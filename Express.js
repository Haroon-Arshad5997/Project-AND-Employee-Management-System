const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {exec} = require('child_process');
const bcryptjs = require('bcryptjs');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'Frontend')));

app.get('/', (req, res, next) => {
    try{
        res.status(200).sendFile(path.join(__dirname, 'Frontend', 'Login.html'));
    }
    catch{
        const error = new Error('Some Error Occured');
        next(error);
    }
});

app.use((err, req, res) => {
    res.status(500).send(
        JSON.stringify({
            error: err.message
        }));
});

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}/`);
    exec(`start http://localhost:${PORT}/`);
});