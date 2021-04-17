const { CommandStructure } = require("../../handler_comandos/index");

class Nitro_Pobre extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "nitro_pobre",
            aliases: ["poor_nitro"],
            description: {
                pt: "Não tem dinheiro para comprar nitro?\nEntão ative o nitro pobre no seu servidor! :tada:",
                en: "Don't have the money to buy nitro?\nThen activate the poor nitro on your guild! :tada:"
            },
            category: {
                pt: "⚙️ Configuração",
                en: "⚙️ Configuration"
            },
            cooldown: 20000,
            usage: "<on/off>",
            usages: [
                "nitro_pobre",
                "nitro_pobre on",
                "nitro_pobre off"
            ],
            clientPermissions: ["manageWebhooks"],
            userPermissions: ["manageGuild", "manageMessages"]
        })
    }
    async run(message, args, idioma, prefix, db) {
        if (!["on", "off"].some(a => a === args[0])) {
          let msg = await message.channel.createMessage({
              "embed": {
                  "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790,
                  "description": idioma.nitro.desc,
                  "title": idioma.nitro.nitro,
                  "fields": [
                      {
                          "name": "Status",
                          "value": db.get(`NitroPobre.${message.channel.guild.id}`) === "on" ? idioma.nitro.on : idioma.nitro.off
                      }
                  ],
                  "thumbnail": {
                      "url": "https://i.redd.it/mvoen8wq3w831.png"
                  },
                   "footer": {
                    "text": idioma.exe
                    .replace("{user}", `${message.member.username}#${message.member.discriminator}`),
                    "icon_url": message.member.avatarURL
                }
              }
          })  
        } else if (["on", "ligar", "ativar"].some(a => a === args[0])) {
            db.set(`NitroPobre.${message.channel.guild.id}`, "on");
            message.addReaction("✅");
        } else if (["off", "desligar", "desativar"].some(a => a === args[0])) {
            db.set(`NitroPobre.${message.channel.guild.id}`, "off");
            message.addReaction("✅");
        }
    }
}

module.exports = Nitro_Pobre;