const { CommandStructure } = require("../../handler_comandos/index");

class Say extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "say",
            aliases: ["falar"],
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
                pt: "Faça com que eu diga algo",
                en: "Make me say something"
            }
        }) 
    }
    async run(message, args, idioma, prefix, db, slash) {
        let texto = message.content.slice(prefix.length).trim().split(/ +/g).slice(1).join(" ");
        if (slash) texto = args.slice(0);
        message.channel.createMessage(`✍️ ${message.member}\n\n${texto}`)
    }
}

module.exports = Say;