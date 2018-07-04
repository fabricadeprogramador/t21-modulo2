'use strict'

const Express = require('express');
const ConvidadosRoute = require('./routes/ConvidadosRoute');
const bodyParser = require('body-parser');

class App {

    constructor() {
        this.app;
    }

    init() {

        //Instanciando Express
        this.app = Express();

        this.app.use(bodyParser.urlencoded({ extended: false }));

        new ConvidadosRoute(this.app);

        this.app.get('/', function (req, res) {
            res.send("Bem Vindo a API da lista de Convidados FDP!");
        });
        
        this.app.listen(3003, function () {
            console.log("API rodando na porta 3003.");
        });
    }
}

new App().init();