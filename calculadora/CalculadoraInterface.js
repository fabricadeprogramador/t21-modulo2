var readLine = require('readline');
var Calculadora = require('./Calculadora');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


class CalculadoraInterface {

    constructor(){
        this.calc = new Calculadora();
    }

    fazerSoma() {

        rl.question('Digite o primeiro número: ',  (n1) => {
            var numero1 = parseInt(n1);
            console.log("A soma é: " + this.calc.somar(numero1, 2));
            rl.close();
        });

        // console.log("Provando que a execução é assíncrona!");
    }


}

var calculadoraInterface = new CalculadoraInterface();
calculadoraInterface.fazerSoma();