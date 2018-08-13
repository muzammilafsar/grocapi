const express = require('express');
var app = express();

port = process.env.PORT || 3000 ;
var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Product = require('./Models/ProductModel');
var User = require('./Models/UserModal');
var Order = require('./Models/OrderModel');
var Category = require('./Models/CategoryModel');
var SubCategory = require('./Models/SubCategory');
var RootCategory = require('./Models/RootCategoryModel');

var bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://admin:abdus@cluster0-shard-00-00-mbkz4.mongodb.net:27017,cluster0-shard-00-01-mbkz4.mongodb.net:27017,cluster0-shard-00-02-mbkz4.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
// mongoose.connect('mongodb://localhost/foodapp');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit:10241024102420,type:'application/json'}));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","HEAD,GET,POST,PATCH,OPTIONS,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var routes = require('./Routes/Routes'); //importing route
routes(app); //register the route
app.listen(port);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('todo list RESTful API server started on: ' + port);
