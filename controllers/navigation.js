
//IMPORTING DEPENCÊNCIES
var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var bodyParser = require('body-parser');


router.get('/homepage', (req, res) =>{
    res.render('./homepage')
})

router.post('/promptGenerator', (req, res) =>{
    var formato = req.body.formatosTextos

    console.log(formato)
    var prompt = `Gere um texto nesse formato: ${formato}`
    res.render('./prompt', {
        formatoVar: prompt
    })
})

module.exports = router