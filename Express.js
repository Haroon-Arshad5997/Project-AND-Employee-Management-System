const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {exec} = require('child_process');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'Frontend')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'Frontend', 'Login.html'));
});

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}/`);
    exec(`start http://localhost:${PORT}/`);
});