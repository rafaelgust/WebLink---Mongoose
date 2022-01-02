const mongoose=require('mongoose');

const TestModel = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    },
});

const Test = mongoose.model('Test', TestModel);

module.exports = Test;