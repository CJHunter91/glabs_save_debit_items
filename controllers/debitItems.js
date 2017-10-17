var express = require('express');
var debitRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://localhost:27017/glabs_test', (err, database) =>{
  if (err) return;
  db = database;

})

debitRouter.get('/', (req,res) =>{
  db.collection('debitItems').find().toArray(function (err,results){
    if(err) console.log("error with request: " + err);
    res.json(results);
  })
})

module.exports = debitRouter;