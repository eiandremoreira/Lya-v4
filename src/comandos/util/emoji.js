const {CommandStructure} = require("../../handler_comandos/index");
const {parse} = require("twemoji-parser");

class Emoji extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "emoji",
            aliases: ["emoji_img"],
            usage: "<emoji>",
            category: {
                pt: "🔩 Util",
                en: "🔩 Util"
            },
            description: {
                pt: "Veja a imagem de um emoji",
                en: "View a emoji image"
            },
            args: {
                o: 1,
                c: 1
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        const emojiIDArgRegex = /(?<=<a?:.*:)\d*(?=>)/;
        const defaultEmojiRegex = /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]/;
        
        const emoji = args.join("").match(emojiIDArgRegex);
        const animated = /<[a]:/g.test(args.join(""));

          if (!emoji) {
            if (defaultEmojiRegex.test(args[0])) {
                return message.channel.createMessage({content: `${message.member}`, messageReferenceID: message.id, embed: {image: {url: `${parse(args[0], { assetType: "png" })[0].url}`}, color: this.client.embedColor}})
            }
          }
          return message.channel.createMessage({content: `${message.member}`, messageReferenceID: message.id, embed: {image: {url: `https://cdn.discordapp.com/emojis/${emoji}.${animated ? "gif" : "png"}`}, color: this.client.embedColor}})
    }
}

module.exports = Emoji;