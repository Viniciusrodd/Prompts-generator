
//IMPORTING DEPENCÊNCIES
var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var bodyParser = require('body-parser');


router.get('/homepage', (req, res) =>{
    res.render('./homepage')
})


router.post('/promptGenerator', (req, res) =>{
    var formato = req.body.formatosTextos;
    var objetivo = req.body.objectiveText;
    var estilo = req.body.estilo;
    var preferencias = req.body.preferencias;
    var publicoAlvo = req.body.publicoAlvo;
    var textRef = req.body.textRef;


    var prompt = `poderia fazer um texto com o FORMATO: ${formato}, 
    mantendo ainda seus pontos importantes, minuncias, 
    e detalhes especificos sobre os pontos,
    significado de siglas e termos usados, menções sobre algo 
    ou alguém, datas mencionadas, se houver figuras deixe apenas 
    uma sinalização de que terá figuras naquela exata parte do texto, 
    afim que eu apenas compreenda melhor o conteúdo. 
    Este é o OBJETIVO desse texto: ${objetivo} o ESTILO de elaboração 
    desse texto deve ser: ${estilo}, e também 
    uma PREFERÊNCIA que quero que ele NÃO POSSUA é: ${preferencias},
    e quero que o PÚBLICO ALVO desse texto seja: ${publicoAlvo}, entenda que é 
    importante que eu não perca nenhuma informação essencial sobre o tema abordado
    nos titulos e subtitulos do texto. texto REF: ${textRef}`
    
    if(formato == ''){
        res.render('./homepage')
    }else{
        res.render('./prompt', {
            formatoVar: prompt
        })    
    }
})


module.exports = router