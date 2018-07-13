'use strict'

const Express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');

const UsuarioRoute = require('./routes/UsuarioRoute')

const env = process.NODE_ENV || 'development';
const config = require('./config.json')[env];

class App{
    constructor(){
        this.app;
    }

    init(){
        this.app = Express();

        this.app.use(bodyParser.json());

        // Mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.url}/${config.db.nome}`, { useNewUrlParser: true });
        
        new UsuarioRoute(this.app);

        this.app.get('/', function (req, res) {
            res.send("Bem Vindo a API do CRUD de Clientes!");
        });

        this.app.listen(config.port, function () {
            console.log("API está rodando na porta " + config.port);
        })

    }
}

new App().init();