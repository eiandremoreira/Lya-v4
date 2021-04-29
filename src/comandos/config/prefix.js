const { CommandStructure } = require("../../handler_comandos/index");

class Prefix extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "prefix",
            aliases: ["set_prefix"],
            usage: "<prefix>",
            category: {
                pt: "⚙️ Configuração",
                en: "⚙️ Configuration"
            },
            cooldown: 10000,
            userPermissions: ["manageGuild"],
            args: {
                o: 1,
                n: 0,
                c: 1
            },
            description: {
                pt: "Mude meu prefixo no servidor!",
                en: "Change my prefix on guild!"
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        if (args.slice(0).join(" ") === prefix) return message.channel.createMessage({"embed": {"description": `<:nani:831975500812779530> ${idioma.prefix.err}\`${prefix}\`...`, "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790}})

        await db.set(`Prefix.${message.channel.guild.id}`, args.slice(0).join(" "));

        message.channel.createMessage({"embed": {"description": `✅ ${idioma.prefix.txt}\`${args.slice(0).join(" ")}\``, "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790}})
    }
}

module.exports = Prefix;