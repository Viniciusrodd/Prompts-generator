
var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('view engine', 'ejs');


app.get('/', (req, res) =>{
    res.send('its working');
})


app.listen(4550, () =>{
    console.log('Server running Ok');
})