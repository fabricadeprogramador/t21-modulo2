const Mongoose = require('mongoose');

class Usuario extends Mongoose.Schema {

    constructor() {
        super({
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        })

        Mongoose.model('Usuario', this);
    }

}
new Usuario();
module.exports = Usuario;