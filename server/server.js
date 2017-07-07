var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
// Local imports
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

// POST REQUEST
app.post('/todos', (req, res)=>{
//    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }, (err)=>{
        res.status(400).send(err);
    });
});
// GET REQUEST
app.get('/todos', (req, res)=>{
   Todo.find().then((todos)=>{
       res.send({todos});
   },(err)=>{
       res.status(400).send(e);
   }); 
});

app.get('/todos/:id', (req, res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
       return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
           return res.status(404).send();
        } 
       res.send(todo.text);
        
    }, (err)=>{
       res.status(400).send();
    });
    // findById
        // success
            // if todo - send it back
            // if no todo - 404
        // err
            // 400 - and send empty body back
});

app.listen(3000, ()=>{
   console.log('Started on port 3000'); 
});

module.exports = {app};