const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    tid: {
        type: String,
        required: true
    },

    todo: {
        type: String,
        required: true
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;