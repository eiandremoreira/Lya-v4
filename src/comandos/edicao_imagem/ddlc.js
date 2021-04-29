const {CommandStructure} = require("../../handler_comandos/index");
const LyaEmbedBuilder = require("../../complementos/EmbedBuilder/LyaEmbedBuilder");

class DDLC extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "ddlc",
            aliases: ["doki_doki"],
            usage: "<personagem> <frase>",
            examples: [
                "ddlc monika just monika!",
                "ddlc natsuki Cake",
                "ddlc yuri pen!",
                "ddlc sayori F"
            ],
            args: {
                o: 2,
                c: 2
            },
            description: {
                pt: "Crie uma imagem de ddlc com uma frase!",
                en: "Create a DDLC image with a phrase!"
            },
            category: {
                pt: "🖼️ Edição de imagem",
                en: "🖼️ Image edit"
            }
        })
    }
    async run(message, args, idioma) {
        let embedErr = new LyaEmbedBuilder().description("Personagens: `monika`, `natsuki`, `yuri`, `sayori`").color(this.client.embedColor);
        if (!['m', 's', 'y', 'n', 'monika', 'natsuki', 'yuri', 'sayori'].some(a => args[0] === a)) return message.createMessage(embedErr.create);

        let bg = [
            "bedroom",
            "class",
            "closet",
            "club",
            "corridor",
            "house",
            "kitchen",
            "residential",
            "sayori_bedroom"
        ]
        let f = [
            "a", 
            "b", 
            "c", 
            "d", 
            "e", 
            "f", 
            "g", 
            "h", 
            "i", 
            "j", 
            "k", 
            "l", 
            "m", 
            "n", 
            "o", 
            "p", 
            "q", 
            "r"
        ]
        let background = bg[Math.floor(Math.random() * bg.length)];

        const fetch = require('node-fetch');
        let face = f[Math.floor(Math.random() * f.length)]
        let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=ddlc&background=${background}&character=${args[0].toLowerCase()}&body=1&face=${face}&text=${args.slice(1).join(" ")}`));
        let json = await res.json();

        message.channel.createMessage({content: message.member, embed: new LyaEmbedBuilder().image(json.message).color(this.client.embedColor).toJson});
    }
}

module.exports = DDLC;