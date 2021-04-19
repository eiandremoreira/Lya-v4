const { CommandStructure } = require("../../handler_comandos/index");

class Blacklist extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "blacklist",
            ownerOnly: true,
            description: {
                pt: "oi?",
                en: "hi?"
            },
            category: {
                pt: "Desenvolvedor",
                en: "Developer"
            },
            args: {
                o: 1,
                n: 0
            }
        })
    }
    async run(message , args, idioma, prefix, db) {
        var user = {};

        if (message.mentions[0]) {
            const id = message.mentions[0].id;
            user = await this.client.getRESTGuildMember(message.channel.guild.id, id);
        } else if (args[1]) {
            user = await this.client.getRESTGuildMember(message.channel.guild.id, args[1]);
        } else {
            return message.channel.createMessage("Cade o user alek");
        }

        if(args[0] === "add") {
            await db.set(`Blacklist.${user.id}`, "sim");
            message.channel.createMessage(`${user} Foi adicionado a blacklist!`);
        } else {
            await db.set(`Blacklist.${user.id}`, "nao");
            message.channel.createMessage(`${user} Foi removido da blacklist!`);
        }

    }
}

module.exports = Blacklist;