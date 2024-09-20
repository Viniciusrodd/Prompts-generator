
//IMPORTING DEPENCÊNCIES
var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');



//SETTING EJS AS A VIEW ENGINE
app.set('view engine', 'ejs');



//USING A PUBLIC FOLDER AS A STATIC FILES
app.use(express.static('public'));



//CONFIG A BODY-PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



//IMPORTING ROUTER ROUTES and CONFIG EXPRESS TO USE ROUTES DEFINED BY ROUTER
const navigationController = require('./controllers/navigation');
app.use('/', navigationController)



//RUNNING SERVER
app.listen(4550, () =>{
    console.log('Server running Ok');
})