
//IMPORTING DEPENCÊNCIES
var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var bodyParser = require('body-parser');


router.get('/homepage', (req, res) =>{
    res.render('./homepage')
})


router.post('/promptGenerator', (req, res) =>{
    var assunto = req.body.aboutText;
    var formato = req.body.formatosTextos;
    var objetivo = req.body.objectiveText;
    var estilo = req.body.estilo;
    var preferencias = req.body.preferencias;
    var publicoAlvo = req.body.publicoAlvo;
    var textRef = req.body.textRef;


    var prompt = `poderia me construir um texto sobre ${assunto} 
    com o FORMATO: ${formato}, ressaltando seus pontos mais importantes, 
    minuncias, e detalhes especificos sobre esses pontos, com
    significado de siglas e termos, menções sobre algo 
    ou alguém, datas mencionadas, se houver referência de figuras deixe 
    uma sinalização de sua recomendação na parte do texto em questão, 
    afim que eu apenas compreenda melhor o conteúdo. 
    Este é o OBJETIVO desse texto: ${objetivo}, seu ESTILO de elaboração 
    desse deve ser: ${estilo}, e também uma PREFERÊNCIA pessoal que quero 
    que ele NÃO POSSUA é: ${preferencias}, além disso desejo
    que o PÚBLICO ALVO desse texto seja: ${publicoAlvo}, entenda que é 
    importante que eu não perca nenhuma informação essencial sobre o tema abordado
    nos titulos e subtitulos do texto. Um possível texto como REFERÊNCIA: 
    ${textRef}`

    if(formato == ''){
        res.render('./homepage')
    }else{
        res.render('./prompt', {
            formatoVar: prompt
        })    
    }
})


module.exports = router