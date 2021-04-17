const { CommandStructure } = require("../../handler_comandos/index");

class Clap extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "clap",
            usage: "<txt>",
            aliases: ["palmas"],
            args: {
                o: 1,
                n: 0
            },
            category: {
                pt: "✏️ Edição de texto",
                en: "✏️ Text edit"
            },
            description: {
                pt: "Faça👏um👏texto👏neste👏estilo",
                en: "Make👏a👏text👏in👏this👏style"
            }
        }) 
    }
    async run(message, args) {
        let texto = args.slice(0).join(' ').split(' ').map(a => a).join("👏");
        message.channel.createMessage(`✍️ ${message.member}\n\n${texto}`)
    }
}

module.exports = Clap;