
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

    var prompt = `poderia fazer uma reformatação esclarecida desse texto, 
        com um ${formato}, mantendo ainda seus pontos 
        importantes, minuncias, e detalhes especificos sobre os pontos,
        significado de siglas e termos usados, menções sobre algo 
        ou alguém, datas mencionadas, se houver figuras deixe apenas 
        uma sinalização de que terá figuras naquela exata parte do texto, 
        afim que eu apenas compreenda melhor o conteúdo. Entenda que essa 
        simplificação é para que eu possa ANOTAR em meu caderno então é 
        importante que eu não perca NENHUMA informação essencial sobre o tema abordado
        nos titulos e subtitulos do texto:`
    
    if(formato == ''){
        res.render('./homepage')
    }else{
        res.render('./prompt', {
            formatoVar: prompt
        })    
    }
})


module.exports = router