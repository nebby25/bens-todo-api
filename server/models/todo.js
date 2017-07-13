var mongoose = require('mongoose');
// A model that returns a new Todo object
//mongoose.Promise = global.Promise;
var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
});

module.exports = {Todo};