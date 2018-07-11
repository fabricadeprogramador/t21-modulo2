'use strict'

const Mongoose = require('mongoose');

class Convidado extends Mongoose.Schema{

    constructor(){
        super({
            nome:{
                type: String,
                required: true
            },
            idade:{
                type: Number,
                required: true
            },
            sexo:{
                type: String,
                required: true
            }
        });

        Mongoose.model('Convidado', this);
    }
}

new Convidado();
module.exports = Convidado;