const mongoose = require('mongoose');
const DATABASE = 'links';

mongoose.connect('mongodb://localhost/' + DATABASE).then(() => {
    console.log(`database [${DATABASE}] connected`);
}).catch((err) => {
    console.log('Error in connection at database', err);
});