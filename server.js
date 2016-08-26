#!/usr/bin/env node
var baseDir = 'build';

var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uuid = require('node-uuid');
var app = module.exports.app = exports.app = express();
var webPath = baseDir + '/';



const mongoURL =  process.env.mongoURL || require('./envConfig');
mongoose.connect(mongoURL);

var emailSignup = mongoose.model('Signup', {_id:String, email:String})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(baseDir));

app.get('/*', function (req, res) {
  var htmlPath = path.join(process.cwd(), webPath + 'index.html');
  res.sendFile(htmlPath);
});

app.post('/signup', function(req, res) {
  console.log('POST received', req.body)
  var keys = Object.keys(req.body);
  var data = keys[0];
  var id = uuid.v4();


  console.log('Keys', keys[0]);

  var email = new emailSignup({_id:id, email:data});

  emailSignup.findOne({'email':data}, {}, function(err, email){
    if(email){
      console.log('Already in database')
      res.send('Already in database')
    }else if(err){
      console.log('Error', err)
      res.send('Error')
    } else {
      console.log('Good email and not found in database.  Saving');
       saveEmail();
    }
  });

  function saveEmail(){
    email.save(function(err){
      if(err){
        res.send('Error');
        console.log('err', err)
      }else{
        res.send('OK');
        console.log('Should be saved in the database now')
      }
    });
  }

});

app.listen(process.env.PORT || 3002);
