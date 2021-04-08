const {CommandStructure} = require("../../handler_comandos/index");

class Ping extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "ping",
            aliases: ["pong"],
            description: {
                pt: "Veja se estou funcionando!",
                en: "See if I'm working!"
            },
            category: {
                pt: "ℹ️ Informação",
                en: "ℹ️ Information"
            },
        })
    }
    async run(message) {
        await message.channel.createMessage({"embed": {
            "description": `⌛ ${Date.now() - message.timestamp}ms\n💗 ${Math.round(message.channel.guild.shard.latency)}ms`,
            "color": 3092790
        }})
    }
}

module.exports = Ping;