const { CommandStructure } = require("../../handler_comandos/index");

class Reverse extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "reverse",
            aliases: ["inverter"],
            usage: "<txt>",
            args: {
                o: 1,
                n: 0
            },
            category: {
                pt: "✏️ Edição de texto",
                en: "✏️ Text edit"
            },
            description: {
                pt: "olitse etsen otxet mu açaF",
                en: "elyts siht ni txet a ekaM"
            }
        }) 
    }
    async run(message, args, idioma, prefix, db, slash) {
        let texto = message.content.slice(prefix.length).trim().split(/ +/g).slice(1).join(" ").split("").reverse().join("");
        if (slash) texto = args.slice(0).map(a => a.split(/ +/g).slice(0).join(" ").split("").reverse().join(""));
        message.channel.createMessage(`✍️ ${message.member}\n\n${texto}`)
    }
}

module.exports = Reverse;