const {CommandStructure} = require("../../handler_comandos/index");
const parseMilliseconds = require('parse-ms');

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
            args: {
                n: 0,
                o: 0
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        await message.channel.createMessage({"embed": {
            "description": `⌛ ${Date.now() - message.timestamp}ms\n💗 ${await parseMilliseconds(message.channel.guild.shard.lastHeartbeatSent).milliseconds}ms\n⚡ ${Math.round(message.channel.guild.shard.latency)}ms`.replace("-", ""),
            "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790
        }})
    }
}

module.exports = Ping;