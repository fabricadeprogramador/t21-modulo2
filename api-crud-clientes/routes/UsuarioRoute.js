const UsuarioController = require('./../controllers/UsuarioController')

class UsuarioRoute {

    constructor(app) {

        app.route('/usuarios')
            .get(UsuarioController.buscarTodos)
            .post()
            .put()
            .delete();
    }
}

module.exports = UsuarioRoute;