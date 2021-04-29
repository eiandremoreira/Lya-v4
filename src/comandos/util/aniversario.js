const {CommandStructure} = require("../../handler_comandos/index");
const {aniversario} = require("../../complementos/util");

class Aniversario extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "aniversario",
            aliases: ["niver", "birthday"],
            usage: "<dia>/<mês>/<ano>",
            examples: [
                "aniversario 22/12/2005"
            ],
            category: {
                pt: "🔩 Util",
                en: "🔩 Util"
            },
            description: {
                pt: "Veja quantos ano tem a pessoa que nasceu em tal data",
                en: "See how many year has the person born on such date"
            }
        })
    }
    async run(message, args, idioma) {
        let data = args.slice(0).join("").split('/').filter(a => a.length > 0);
        if (data.length < 3 || isNaN(data[0]) || isNaN(data[1]) || isNaN(data[2])) return message.channel.createMessage(idioma.aniversario.err);
        return message.channel.createMessage(idioma.aniversario.txt.replace("{data}", args.slice(0).join("")).replace("{input}", aniversario(args.slice(0).join(""))))
    }
}

module.exports = Aniversario;