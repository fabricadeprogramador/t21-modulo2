'use strict'

const Mongoose = require('mongoose');
const Convidado = Mongoose.model('Convidado');

class ConvidadoController{

    static async buscarTodos(req, res){
        try{
            res.json(await Convidado.find({}));
        }
        catch(error){
            console.log(error);
            res.status(500).send("Não foi possível buscar os convidados.");
        }
        
    }
}

module.exports = ConvidadoController;