
//IMPORTING DEPENCÊNCIES
var express = require('express');
var router = express.Router()


router.get('/homepage', (req, res) =>{
    res.render('./homepage')
})


module.exports = router