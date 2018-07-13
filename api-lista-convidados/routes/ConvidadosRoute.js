var ConvidadoController = require('./../controllers/ConvidadoController');

class ConvidadoRoute {

    constructor(app) {

        app.route('/convidados')
        .get(ConvidadoController.buscarTodos)
        .post(ConvidadoController.adicionar)
        .put(ConvidadoController.editar)

        app.route('/convidados/:id')
        .delete(ConvidadoController.excluir)

    }

}

module.exports = ConvidadoRoute;