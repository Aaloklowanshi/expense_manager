const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const Expense = require('./models/expense');


const app = express();
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var priceManager = [
  {
    product_name:"toothpaste",
    price : "120"
  },
  {
    product_name:"file",
    price:"35"
  }
];

app.get('/' , function (req , res) {
    // res.send('server chl riya hai ');
    return res.render('home' ,{
      title : "expense manager",
      priceManager:priceManager
    });
  });

  app. post('/add-item' , function(req , res){
    // try{

    // }
    Expense.create({
      product_name:req.body.product_name,
      price:req.body.price
    } , function (err , newExpense) {
      if(err){
        console.log("error creating an expense"); 
        return;       
      }

      console.log("***" , newExpense);
      return res.redirect('back');
      
      });

    // priceManager.push(req.body);

    // res.redirect('back');


  });

  app.get('/delete-item' , function(req , res){
    let productName = req.query.product_name;
    let productIndex = priceManager.findIndex(product => product.product_name == productName);

    if(productIndex!=-1){
      priceManager.splice(productIndex , 1);
    } 
    return res.redirect('back');
  })

app.listen(port, function (err) {
    if(err){
        console.log("error in running the server" , err);
    }    
    console.log("server is running good ");
  })