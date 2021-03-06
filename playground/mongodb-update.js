const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
//    db.collection('Todos').findOneAndUpdate({text: 'Eat lunch'}, {
//        $set: {completed: true}
//    }, {returnOriginal: false}).then((result)=>{
//        console.log(result);
//    });
    
    db.collection('Users').findOneAndUpdate({name: 'Jerry Mongo'}, {
        $set: {name: 'Benjamin Taylor'},
        $inc: {age: 10}
    },{returnOriginal: false}).then((result)=>{
        console.log(result);
    });
    
//    db.close();
});