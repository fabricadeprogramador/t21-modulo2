'use strict'

const Express = require('express');
const ConvidadosRoute = require('./routes/ConvidadosRoute');
// const Convidado = require('./model/Convidado');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');

class App {

    constructor() {
        this.app;
    }

    init() {

        //Instanciando Express
        this.app = Express();

        this.app.use(bodyParser.json());

        Mongoose.connect("mongodb://fdpmodulo2:2018modulo2@ds259620.mlab.com:59620/lista-convidados", { useNewUrlParser: true });

        // new Convidado();

        
        const ClienteRoute = require('./routes/ClienteRoute');

        new ConvidadosRoute(this.app);
        new ClienteRoute(this.app);

        this.app.get('/', function (req, res) {
            res.send("Bem Vindo a API da lista de Convidados FDP!");
        });
        
        this.app.listen(3003, function () {
            console.log("API rodando na porta 3003.");
        });
    }
}

new App().init();