// cria uma var que recebe uma instancia do framework "express" que serve para criar um servidor web
var express = require('express');

// inicia a instancia do "express" na var app
var app = module.exports = express();

// inicia o body-parser que serve para trabalhar com dados json na api
var bodyParser = require('body-parser');

var allowCors = function(req, res, next) {
    // esses headers serão adicionados as respostas na execução
    res.header('Access-Control-Allow-Origin', '127.0.0.1:5000');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    // continue com seu processamento
    next();
}

// isso vai ser executado antes de cada resposta ser enviada ao cliente
app.use(allowCors);

// inicia o servidor web ouvindo na porta 5000
app.listen(5000);

// fazer uma chamada para o app usar o bodyParser
app.use(bodyParser.json());

// parametro egixido pelo bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
