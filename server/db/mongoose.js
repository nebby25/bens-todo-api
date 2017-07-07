var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true }).then(()=>{
    console.log('Connected to database!');
}, (e)=>{
    console.log('Failure to connect', e);
});


module.exports = {
    mongoose
};


