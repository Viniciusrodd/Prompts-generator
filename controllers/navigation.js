
//IMPORTING DEPENCÊNCIES
var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var bodyParser = require('body-parser');


router.get('/homepage', (req, res) =>{
    res.render('./homepage')
})


router.post('/promptGeneratorModify', (req, res) =>{
    var textRef = req.body.textModify.toUpperCase();
    var especificacaoText = req.body.especificacao.toUpperCase();
    var detalhamento = req.body.detalhamento.toUpperCase();
    var formato = req.body.formatosTextos.toUpperCase();
    var objetivo = req.body.objectiveText.toUpperCase();
    var estilo = req.body.estilo.toUpperCase();
    var figurasDiagramas = req.body.FigurasDiagramas.toUpperCase();
    var publicoAlvo = req.body.publicoAlvo.toUpperCase();

    var campos = { 
        textRef, 
        formato, 
        objetivo, 
        estilo, 
        publicoAlvo, 
        detalhamento,
        figurasDiagramas,
        especificacaoText
    }

    var prompt2 = `
    Olá, tenho o seguinte texto referência: ${textRef}.
    Gostaria de adaptá-lo, e para isso, quero personalizar da seguinte forma:

    - Formato do texto: ${formato}.
    - Especificação para trabalhar com o texto referência: ${especificacaoText}.
    - Nível de detalhamento: ${detalhamento}.
    - O objetivo é: ${objetivo}.
    - Estilo de escrita preferido: ${estilo}.
    - Público-alvo para essa versão: ${publicoAlvo}.
    - Me seria muito útil ter: ${figurasDiagramas}.
    
    É essencial que nenhuma informação importante seja perdida nos títulos e subtítulos, 
    e que o texto final seja adaptado de acordo com as preferências mencionadas acima.
    `.trim();

    if(campos === ''){
        res.render('./homepage')
    }else{
        res.render('./prompt', {
            prompt: prompt2
        })    
    }
})




router.post('/promptGenerator', (req, res) =>{
    var assunto = req.body.aboutText.toUpperCase();
    var detalhamento = req.body.detalhamento.toUpperCase();
    var formato = req.body.formatosTextos.toUpperCase();
    var objetivo = req.body.objectiveText.toUpperCase();
    var estilo = req.body.estilo.toUpperCase();
    var exemplos = req.body.exemplos.toUpperCase();
    var figurasDiagramas = req.body.FigurasDiagramas.toUpperCase();
    var preferencias = req.body.preferencias.toUpperCase();
    var publicoAlvo = req.body.publicoAlvo.toUpperCase();

    var campos = { 
        assunto, 
        formato, 
        objetivo, 
        estilo, 
        preferencias, 
        publicoAlvo, 
        detalhamento,
        exemplos,
        figurasDiagramas
    }

    var prompt = `
    Poderia criar um texto sobre o seguinte tema: ${assunto}. Gostaria que ele 
    fosse estruturado no formato: ${formato}, com um nível de detalhamento: 
    ${detalhamento}. Para tornar o conteúdo mais claro, seria ótimo incluir: ${exemplos}. 
    Me seria muito útil ter: ${figurasDiagramas}, caso necessário. 
    O objetivo principal do texto é: ${objetivo}, e o estilo de escrita deve ser: ${estilo}. 
    Além disso, como preferência pessoal, eu gostaria de: ${preferencias}. 
    Não se esqueça de que o público-alvo para esse texto será: ${publicoAlvo}. 
    É fundamental que nenhuma informação essencial sobre o tema seja 
    perdida nos títulos e subtítulos.`

    if(campos === ''){
        res.render('./homepage')
    }else{
        res.render('./prompt', {
            prompt: prompt
        })    
    }
})


module.exports = router