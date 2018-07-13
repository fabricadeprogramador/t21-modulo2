'use strict'

const Mongoose = require('mongoose');
const Convidado = Mongoose.model('Convidado');

class ConvidadoController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Convidado.find({}));
        } catch (error) {
            console.log(error);
            res.status(500).send("Não foi possível buscar os convidados.");
        }

    }

    static async buscarPorNome(req, res) {
        try {
            res.json(await Convidado.find({
                nome: req.body.nome
            }))
        } catch (error) {
            res.status(500).send('Problema ao buscar convidado por nome.')
        }
    }

    static async adicionar(req, res) {
        try {
            let resultado = await Convidado.create(req.body);
            res.json(resultado);
        } catch (error) {
            console.log(error);
            res.status(500).send('Problema ao salvar convidado.')
        }
    }

    static async editar(req, res) {

        if (!req.body._id) {
            return res.status(400).send("Obrigatório a passagem de um objeto com id para edição.");
        }

        try {
            let resultado = await Convidado.findByIdAndUpdate(req.body._id, req.body);
            res.json(resultado);
        } catch (error) {
            console.log(error);
            res.status(500).send('Problema ao editar convidado.');
        }
    }

    static async excluir(req, res) {

        if (!req.params.id) {
            return res.status(400).send("Obrigatório a passagem do id para exclusão.");
        }

        try {
            let resultado = await Convidado.remove({
                _id: req.params.id
            });
            res.json(resultado);
        } catch (error) {
            console.log(error);
            res.status(500).send('Problema ao excluir convidado.');
        }
    }
}

module.exports = ConvidadoController;