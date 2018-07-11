var Convidado = require('./../model/Convidado');
var ConvidadoController = require('./../controllers/ConvidadoController');

class ConvidadoRoute {

    constructor(app) {

        app.get('/convidados', (req, res) => {
            ConvidadoController.buscarTodos(req, res);
        });

        app.post('/convidados', (req, res) => {

        });

        app.put('/convidados', (req, res) => {

        });

        app.delete('/convidados/:id', (req, res) => {

        });
    }

}

module.exports = ConvidadoRoute;