const {CommandStructure} = require("../../handler_comandos/index");

class Votar extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "votar",
            aliases: ["vote"],
            description: {
                pt: "Vote em mim e me ajude a crescer!",
                en: "Vote for me and help me grow!"
            },
            category: {
                pt: "🔩 Util",
                en: "🔩 Util"
            }
        })
    }
    async run(message) {
        message.channel.createMessage("<:zuraaa:810284157771055114> **|** https://www.zuraaa.com/bots/806007765830860842/votar")
    }
}

module.exports = Votar;