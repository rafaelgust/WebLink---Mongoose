const mongoose=require('mongoose');

const TestModel = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
});