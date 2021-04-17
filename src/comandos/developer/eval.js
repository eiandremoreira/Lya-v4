const { CommandStructure } = require("../../handler_comandos/index");

class Eval extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "eval",
            ownerOnly: true,
            args: {
                o: 1,
                n: 0
            }
        })
    }
    async run (message, args, idioma, prefix, db) {
        let r = await eval(args.slice(0).join(" ")).catch(e => {
            return message.channel.createMessage(`\`\`\`js\n${e}\`\`\``)
        });
        message.channel.createMessage(`\`\`\`js\n${r}\`\`\``)
    }
}

module.exports = Eval;