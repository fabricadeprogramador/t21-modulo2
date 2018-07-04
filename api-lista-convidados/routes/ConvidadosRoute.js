var Convidado = require('./../model/Convidado');

class ConvidadoRoute {

    constructor(app) {

        let convidado1 = new Convidado("Jão da Silva", 30, "M");
        let convidado2 = new Convidado("Maria da Silva", 39, "F");
        let convidado3 = new Convidado("Marcelo da Conceição", 18, "M");

        var convidados = [
            convidado1,
            convidado2,
            convidado3
        ];

        app.get('/convidados', function (req, res) {
            res.json(convidados);
        });

        app.post('/convidados', function (req, res) {
            // res.send("POST para /convidados");

            //TODO
            let convidadoAdicionar = req;
            console.log("REQ = " + req);
            convidados.push(convidadoAdicionar);
            res.json(convidadoAdicionar);
        });

        app.put('/convidados', function (req, res) {
            res.send("PUT para /convidados");
        });

        app.delete('/convidados', function (req, res) {
            res.send("DELETE para /convidados");
        });
    }

}

module.exports = ConvidadoRoute;