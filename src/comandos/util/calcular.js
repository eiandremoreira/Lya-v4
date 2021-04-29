const { CommandStructure } = require("../../handler_comandos/index");
const calculadora = require("calculadora-simples"); // Criado por mim.
const calc = new calculadora(false);

class Calculadora extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "calculadora",
            aliases: ["calc", "math"],
            args: {
                n: 0,
                o: 3
            },
            usage: "<num1> <sinal> <num2>",
            examples: [
                "calculadora 1 + 1",
                "calculadora 1 - 1",
                "calculadora 1 * 1",
                "calculadora 1 / 1",
                "calculadora 1 ^ 1",
                "calculadora 1 i 1"
            ],
            description: {
                pt: "Faça uma conta de matemática",
                en: "Make math account"
            },
            args: {
                o: 3,
                c: 3
            },
            category: {
                pt: "🔩 Util",
                en: "🔩 Util"
            },
            cooldown: 10000
        })
    }
    async run(message, args, idioma) {

        if (isNaN(args[0]) || isNaN(args[2])) return message.channel.createMessage("Insirá uma conta válida!");

        var conta = " ";

        switch (args[1]) {
            case "+":
                conta = calc.somar(parseFloat(args[0]), parseFloat(args[2]));
                break;
            case "-":
                conta = calc.subtrair(parseFloat(args[0]), parseFloat(args[2]));
                break;
            case "*":
                conta = calc.multiplicar(parseFloat(args[0]), parseFloat(args[2]));
                break
            case "/":
                conta = calc.dividir(parseFloat(args[0]), parseFloat(args[2]));
                break;
            case "^":
                conta = calc.elevar(parseFloat(args[0]), parseFloat(args[2]));
                break;
            case "i":
                conta = calc.imc(parseFloat(args[0]), parseFloat(args[2]));
                break;
            case "%":
                conta = calc.porcentagem(parseFloat(args[0]), parseFloat(args[2]));
                break;
            default:
                return message.channel.createMessage(idioma.calculadora.x);
                break;
        }
    
        message.channel.createMessage(idioma.calculadora.txt.replace("{q}", `${args[0]} ${args[1]} ${args[2]}`).replace("{c}", conta))
        
    }
}

module.exports = Calculadora;