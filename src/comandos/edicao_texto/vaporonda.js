const { CommandStructure } = require("../../handler_comandos/index");

class Vaporonda extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "vaporonda",
            usage: "<txt>",
            aliases: ["vaporwave"],
            args: {
                o: 1,
                n: 0
            },
            category: {
                pt: "✏️ Edição de texto",
                en: "✏️ Text edit"
            },
            description: {
                pt: "Ｆａçａ ｕｍ ｔｅｘｔｏ ｎｅｓｔｅ ｅｓｔｉｌｏ",
                en: "Ｍａｋｅ ａ ｔｅｘｔ ｉｎ ｔｈｉｓ ｓｔｙｌｅ"
            }
        }) 
    }
    async run(message, args, idioma, prefix) {
        let texto = message.content.slice(prefix.length).trim().split(/ +/g).slice(1).join(" ").split(" / ")[0].split('');
        if (slash) texto = args.slice(0).map(a => a.split(" / ")[0].split(''));
        texto.map(char => {
            const code = char.charCodeAt(0);
    
            return code >= 33 && code <= 126 ? String.fromCharCode((code - 33) + 65281) : char;
        }).join("");

        message.channel.createMessage(`✍️ ${message.member}\n\n${texto}`)
    }
}

module.exports = Vaporonda;