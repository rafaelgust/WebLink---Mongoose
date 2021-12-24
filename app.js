const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');
const DATABASE = 'links';

mongoose.connect('mongodb://localhost/' + DATABASE).then(() => {
    console.log(`database [${DATABASE}] connected`);
}).catch((err) => {
    console.log('Error in connection at database', err);
});
app.listen(PORT, () => {
	console.log(`Server Running on Port: ${PORT}`);
});

app.use('/', express.static(path.join(__dirname, './public')));