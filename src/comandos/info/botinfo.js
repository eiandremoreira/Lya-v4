const {CommandStructure} = require("../../handler_comandos/index");
const LyaEmbedBuilder = require("../../complementos/EmbedBuilder/LyaEmbedBuilder");
const ms = require("parse-ms");

class Botinfo extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "botinfo",
            aliases: ["clientinfo"],
            description: {
                pt: "Veja minhas informações!",
                en: "See my information!"
            },
            category: {
                pt: "ℹ️ Informação",
                en: "ℹ️ Information"
            }
        })
    }
    async run(message, args, idioma, prefix) {
        const time = ms(this.client.uptime);

        const embed = new LyaEmbedBuilder()
        .title(idioma.botinfo.title)
        .description(idioma.botinfo.txt.replace("{user}", message.member).replace("{client.name}", this.client.user.nick||this.client.user.username).replace("{commands}", await this.client.commands.filter(cmd => cmd).map(a => a).length).replace("{servers}", this.client.guilds.size).replace("{users}", this.client.users.size).replace("{prefix}", prefix).replace("{uptime}", `${time.days}d, ${time.hours}h, ${time.minutes}m ${idioma.botinfo.e} ${time.seconds}s`))
        .color(this.client.embedColor)
        .thumbnail(this.client.user.dynamicAvatarURL("png", 2048))
        message.channel.createMessage(embed.create)
    }
}

module.exports = Botinfo;