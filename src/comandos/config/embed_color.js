const {CommandStructure} = require("../../handler_comandos/index");
const hexToDec = require('hex-to-dec');

class Embed_Color extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "embeds_color",
            aliases: ["ec"],
            userPermissions: ["manageMessages"],
            args: {
                o: 1,
                n: 0
            },
            usage: "<hex>",
            usages: [
                "embeds_colors #8cb8ff"
            ],
            category: {
                pt: "⚙️ Configuração",
                en: "⚙️ Configuration"
            },
            description: {
                pt: "Troque a cor das minhas embeds!",
                en: "Change the color of my embeds!"
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        this.color = args[0].replace("#", "");

        if (this.color.length < 5) return message.channel.createMessage("Cor inválida!");
        let color = this.color ? `#${this.color.toString(16).padStart(6, '0')}` : null;
        if (color === null) return message.channel.createMessage("Cor inválida!");
        else {
            await db.set(`Embeds.colors.${message.channel.guild.id}`, hexToDec(this.color.toString(16).padStart(6, '0')));
            let cor = db.get(`Embeds.colors.${message.channel.guild.id}`);
            message.channel.createMessage({"content": message.member, "embed": {"color": cor, "description": `#${this.color.toString(16).padStart(6, '0')}`}})
        }

    }
}

module.exports = Embed_Color;