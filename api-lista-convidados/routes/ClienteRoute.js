var Cliente = require('./../model/Cliente');

class ClienteRoute {

    constructor(app) {

        let cliente1 = new Cliente("Jão da Silva", "033303030303", "12321321", "Campo Grande");
        let cliente2 = new Cliente("Maria da Silva", "012321", "12321555", "Cuiabá");
        let cliente3 = new Cliente("Zé da Silva", "7898456541", "1151651", "São Paulo");

        let clientes = [cliente1, cliente2, cliente3];

        app.route('/clientes')
            .get(function (req, res) {
                res.json(clientes);
            })
            .post(function (req, res) {
                let clienteAdicionar = req.body;
                clientes.push(clienteAdicionar);
                res.send("Cliente adicionado com sucesso!");
            });

        app.route('/clientes/:id')
            .delete(function (req, res) {
                let posicao = req.params.id;
                clientes.splice(posicao, 1);
                res.send("Deletado com sucesso!");
            })
            .put(function (req, res) {
                let clienteEdicao = req.body;

                console.log(clienteEdicao);
                let posicao = clienteEdicao.id;
                clientes.splice(posicao, 1, clienteEdicao);

                res.send("Elemento editado com sucesso!");
            });
    }

}

module.exports = ClienteRoute;