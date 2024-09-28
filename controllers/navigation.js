
//IMPORTING DEPENCÊNCIES
var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var bodyParser = require('body-parser');


router.get('/homepage', (req, res) =>{
    res.render('./homepage')
})


router.post('/promptGeneratorModify', (req, res) =>{
    var textModify = req.body.textModify.toUpperCase();
    var campos2 = { textModify }

    var prompt2 = `Aqui ta seu texto ref gerado ${textModify}`

    if(campos2 === ''){
        res.render('./homepage')
    }else{
        res.render('./prompt', {
            prompt: prompt2
        })    
    }
})


router.post('/promptGenerator', (req, res) =>{
    var assunto = req.body.aboutText.toUpperCase();
    var formato = req.body.formatosTextos.toUpperCase();
    var objetivo = req.body.objectiveText.toUpperCase();
    var estilo = req.body.estilo.toUpperCase();
    var preferencias = req.body.preferencias.toUpperCase();
    var publicoAlvo = req.body.publicoAlvo.toUpperCase();
    var textRef = req.body.textRef.toUpperCase();

    var campos = { assunto, formato, objetivo, estilo, preferencias, publicoAlvo, textRef }

    var prompt = `poderia me construir um texto sobre este assunto: ${assunto} 
    com o formato: ${formato}, ressaltando seus pontos mais importantes, 
    minuncias, e detalhes especificos sobre esses pontos, com
    significado de siglas e termos, menções sobre algo 
    ou alguém, datas mencionadas, se houver referência de figuras deixe 
    uma sinalização de sua recomendação na parte do texto em questão, 
    afim que eu apenas compreenda melhor o conteúdo. 
    Este é o objetivo desse texto: ${objetivo}, seu estilo de elaboração 
    deve ser: ${estilo}, e também como preferência pessoal, 
    ${preferencias}, e além disso desejo que o público alvo
    desse texto seja: ${publicoAlvo}, entenda que é 
    importante que eu não perca nenhuma informação essencial sobre o tema abordado
    nos titulos e subtitulos do texto. Um possível texto como referência: ${textRef}`

    if(campos === ''){
        res.render('./homepage')
    }else{
        res.render('./prompt', {
            prompt: prompt
        })    
    }
})


module.exports = router