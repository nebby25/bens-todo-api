const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id = "595ea4b2097ced42e82367f51";
//var id = "595fb16f6031dc3168daf79411";
//
//if(!ObjectID.isValid(id)){
//    console.log('ID not valid');
//}

//Get array with documents in it
//Todo.find({
//    _id: id
//}).then((todos)=>{
//    console.log('Todos', todos);
//});
//
////Get back document
//Todo.findOne({
//    _id: id
//}).then((todo)=>{
//    console.log('Todo', todo);
//});

//Todo.findById(id).then((todo)=>{
//    if(!todo){
//        return console.log('Id not found.');
//    }
//    console.log('TodoById', todo);
//}).catch((e)=> console.log(e));

// Query users collection findById
User.findById(id).then((user)=>{
    if(!user){
        console.log('User not found');
    } else {
        console.log(`User found! ${user.email}`);
    }
}).catch((e)=> console.log(`Error with that id! ${e}`));
