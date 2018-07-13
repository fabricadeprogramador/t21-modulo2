const Usuario = require('./../models/Usuario')

class UsuarioController{

    static async buscarTodos(req, res){
        try{
            res.json(await Usuario.find({}));
        } catch(error){
            res.status(500).send('Não foi possível buscar os Usuários');
        }
    }
}

module.exports = UsuarioController;