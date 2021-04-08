const {CommandStructure} = require("../../handler_comandos");
const {get, set} = require("quick.db");

class Idioma extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "idioma",
            aliases: ["lang", "language"],
            usage: "<pt | en | [me <pt | en>]>",
            args: {
                o: 1,
                n: [2, 3],
            },
            usages: [
                "idioma pt",
                "idioma en",
                "idioma me pt",
                "idioma me en"
            ],
            category: {
                pt: "⚙️ Configuração",
                en: "⚙️ Configuration"
            },
            description: {
                pt: "Troque meu idioma no servidor!",
                en: "Change my language on guild!"
            }
        })
    }
    async run(message, args, idioma) {
        if (args[0] === "me") {
            if (!["en", "pt", "pt-br", "en-us"].some(a => args[1] === a)) {
                message.channel.createMessage(`${message.member}, ${idioma.lang.list}`);
            } else if (args[1].includes("pt") || args[1].includes("pt-br")) {
                set(`Idioma_${message.member.id}`, "pt");
                await message.channel.createMessage(idioma.lang.me.pt);
            } else {
                set(`Idioma_${message.member.id}`, "en");
                await message.channel.createMessage(idioma.lang.me.en);
            }
        } else if (!["en", "pt", "pt-br", "en-us"].some(a => args[0] === a)) {
                message.channel.createMessage(`${message.member}, ${idioma.lang.list}`);
            } else if (args[0].includes("pt") || args[0].includes("pt-br")) {
                await set(`Idioma_${message.channel.guild.id}`, "pt");
                await message.addReaction("✅");
            } else {
                set(`Idioma_${message.channel.guild.id}`, "en");
                await message.addReaction("✅");
            }
    }
}

module.exports = Idioma;