const {CommandStructure} = require("../../handler_comandos/index");
const {parseEmoji} = require("../../complementos/util");
const imageDataURI = require("image-data-uri");

class AddEmoji extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "addemoji",
            usage: "<emoji/url> <nome>",
            args: {
                o: 1,
                c: 1
            },
            category: {
                pt: "👮 Moderação",
                en: "👮 Moderation"
            },
            description: {
                pt: "Adicione um emoji facilmente no servidor!",
                en: "Easily add an emoji on the guild!"
            },
            userPermissions: ["manageEmojis"]
        })
    }
    async run(message, args, idioma) {
        if (!args[1]) {
            try {
                const emojiIDArgRegex = /(?<=<a?:.*:)\d*(?=>)/;

                const emoji = args.join("").match(emojiIDArgRegex);
                const animated = /<[a]:/g.test(args.join(""));
        
                const link = `https://cdn.discordapp.com/emojis/${emoji}.${animated ? "gif" : "png"}`;
                const image = await imageDataURI.encodeFromURL(link);
        
                let emoj = await parseEmoji(args[0]);
                await this.client.createGuildEmoji(message.channel.guild.id, {image: image, name: emoj.name}, "addemoji");
        
                message.addReaction("✅").catch(e => message.channel.createMessage("✅"));
                
            } catch {
                message.channel.createMessage(idioma.addemoji.err[0]);
            }
        } else if (args[1]) {
            try {
                if (!args[0].includes("imgur")) {
                    if (!args[0].includes("cdn.discordapp.com/")) return message.channel.createMessage(idioma.addemoji.err[1]);
                }
                const name = args[1];
                const image = await imageDataURI.encodeFromURL(args[0]);
                await this.client.createGuildEmoji(message.channel.guild.id, {image: image, name: name}, "addemoji");
                message.addReaction("✅").catch(e => message.channel.createMessage("✅"));
            } catch (e) {
                message.channel.createMessage(e);
            }
        }
    }
}

module.exports = AddEmoji;