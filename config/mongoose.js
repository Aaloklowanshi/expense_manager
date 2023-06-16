const mongoose = require('mongoose'); 
//require the library
//connect to databsse
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1/expense_manager_db');
//aquire the connection
const db = mongoose.connection;
//if error
// db.on('error' , console.error.bind(console , 'error connecting to db'));
db.on('error' , function(err){
    console.log(err.message);
})
//up and running then print the msg
db.once('open' , function () { 
    console.log("successfully connected to database")
 });