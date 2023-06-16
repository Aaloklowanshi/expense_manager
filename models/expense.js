const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true
    }
});

//your collection
const Expense = mongoose.model('Expense' , expenseSchema);

module.exports = Expense;
