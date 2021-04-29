const { CommandStructure } = require("../../handler_comandos/index");
const { readFile } = require("fs");
const util = require('util');
const read = util.promisify(readFile);
const {get} = require("quick.db")
class Drops extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "drops",
            usage: "<on/off>",
            description: {
                pt: "Ativa ou desativa o sistema de drops",
                en: "Enables or disables the drops system"
            },
            cooldown: 20000,
            category: {
                pt: "⚙️ Configuração",
                en: "⚙️ Configuration"
            },
            userPermissions: ["manageMessages"],
            examples: [
                "drops",
                "drops on",
                "drops off"
            ],
            args: {
                n: 1,
                c: 1
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        const lang = get(`Idioma_${message.member.id}`) || get(`Idioma_${message.channel.guild.id}`) || "pt";

        if (!["on", "off", "ativar", "desativar", "ligar", "desligar"].some(a => a === args[0])) {
            message.channel.createMessage(idioma.drop.cmd+`\n\n**Status**:\n${db.get(`Drops.${message.channel.guild.id}`)==="on"?idioma.nitro.on:idioma.nitro.off}` ,{file: await read("./src/images/print.png"), name: "drop example.jpg"})
        } else if (["on", "ativar", "ligar"].some(a => a === args[0])) {
            db.set(`Drops.${message.channel.guild.id}`, "on");
            await message.channel.createMessage(lang==="pt"?"Ativado":"Activated");
        } else if (["off", "desativar", "desligar"].some(a => a === args[0])) {
            db.set(`Drops.${message.channel.guild.id}`, "off");
            await message.channel.createMessage(lang==="pt"?"Desativado":"Disabled");
        }
    }
}

module.exports = Drops;