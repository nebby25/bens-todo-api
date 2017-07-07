const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

//Todo.remove({}).then((result)=>{
//    console.log(result);
//});

Todo.findOneAndRemove({_id:'595fcc297da4b5212c5ddecd' }).then((todo)=>{
    console.log(todo);
});

Todo.findByIdAndRemove('595fcc297da4b5212c5ddecd').then((todo)=>{
    console.log(todo);
});