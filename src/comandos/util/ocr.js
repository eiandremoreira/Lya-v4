const fetch = require("node-fetch");
const {CommandStructure} = require("../../handler_comandos/index");
const LyaEmbedBuilder = require("../../complementos/EmbedBuilder/LyaEmbedBuilder");

class OCR extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "ocr",
            description: {
                pt: "Informa o texto da imagem",
                en: "Tells the text of the image"
            },
            category: {
                pt: "🔩 Util",
                en: "🔩 Util"
            },
            args: {
                c: 1
            }
        })
    }
    async run(message, args, idioma) {
        let url = "";
        if (message.attachments[0]) {
            url = message.attachments[0].url;
        } else {
            url = args[0];
        }

        try {
            let body = await fetch(`https://api.ocr.space/parse/imageurl?apikey=c3b86a0c8e88957&url=${url}`);
            let data = await body.json();
            let txt = await data.ParsedResults[0].ParsedText;
    
            let embed = new LyaEmbedBuilder().title(":mag_right: OCR").description("```" + txt + "```").thumbnail(url).color(this.client.embedColor).toJson
            message.channel.createMessage({content: `${message.member}`, messageReferenceID: message.id, embed: embed})
        } catch (e) {
            console.log(e);
            message.channel.createMessage(idioma.ocr.err)
        }
    }
}

module.exports = OCR;