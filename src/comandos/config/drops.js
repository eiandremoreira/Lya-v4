const { CommandStructure } = require("../../handler_comandos/index");
const { readFile } = require("fs");
const util = require('util');
const read = util.promisify(readFile);

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
            usages: [
                "drops",
                "drops on",
                "drops off"
            ],
            args: {
                n: 0,
                o: 0
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        if (!["on", "off", "ativar", "desativar", "ligar", "desligar"].some(a => a === args[0])) {
            message.channel.createMessage(idioma.drop.cmd+`\n\n**Status**:\n${db.get(`Drops.${message.channel.guild.id}`)==="on"?idioma.nitro.on:idioma.nitro.off}` ,{file: await read("./src/images/print.png"), name: "drop example.jpg"})
        } else if (["on", "ativar", "ligar"].some(a => a === args[0])) {
            db.set(`Drops.${message.channel.guild.id}`, "on");
            await message.channel.createMessage(idioma.nitro.ativado);
        } else if (["off", "desativar", "desligar"].some(a => a === args[0])) {
            db.set(`Drops.${message.channel.guild.id}`, "off");
            await message.channel.createMessage(idioma.nitro.desativado);
        }
    }
}

module.exports = Drops;