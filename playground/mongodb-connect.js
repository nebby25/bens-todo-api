const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//const ObjectId = require('mongodb').ObjectID;
//var obj = ObjectId();
//console.log(obj);


// ES6 Object Destructuring (pulls out a property from object)
//var user = {name: 'Benny', age: 25};
//var {name} = user; // Takes the name value from user obj
//console.log(name);


// In mongo, you don't have to create a db to use it, just give it a name
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, (err, result)=>{
//        if (err) {
//            return console.log('Unable to insert todo', err);
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
    
    // Insert new doc into Users (name, age, location)
//    db.collection('Users').insertOne({
//        name: 'Benjamin Taylor',
//        age: 33
//    }, (err, result)=>{
//        if (err) {
//            return console.log('Unable to insert user', err);
//        }
//        console.log(result.ops[0]._id.getTimestamp());
//    });
    
    db.close();
});