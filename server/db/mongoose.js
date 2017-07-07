var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useMongoClient: true }).then(()=>{
    console.log('Connected to database!');
}, (e)=>{
    console.log('Failure to connect', e);
});


module.exports = {
    mongoose
};