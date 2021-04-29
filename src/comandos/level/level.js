const {CommandStructure} = require("../../handler_comandos/index");

class Level extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "nivel",
            aliases: ["level_system", "level"],
            usage: "[config]",
            description: {
                pt: "Veja seu nível atual!",
                en: "See your current level!"
            },
            category: {
                pt: "🆙 Níveis",
                en: "🆙 Levels"
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        if (args[0] === "config") {
            if (!message.member.permissions.has("manageGuild")) return message.channel.createMessage(idioma.level.err);
            if (args[1] === "on") {
                db.set(`Level.Guild.${message.channel.guild.id}`, "on");
                message.channel.createMessage(idioma.level.status[0]);
            } else if (args[1] === "off") {
                db.set(`Level.Guild.${message.channel.guild.id}`, "off");
                message.channel.createMessage(idioma.level.status[1]);
            } else if (args[1] === "channel") {
                if (args[2] === "all") db.delete(`Level.Guild.${message.channel.guild.id}.Channel`);

                try {
                    const channel = await this.client.getRESTChannel(message.channelMentions[0].id || args[2]);
                    db.set(`Level.Guild.${message.channel.guild.id}.Channel`, channel.id);

                    message.channel.createMessage(idioma.level.status[2].replace("{canal}", `<#${channel.id}>`))
                } catch (e) {
                    console.log(e)
                    return message.channel.createMessage(idioma.level.err2);
                }
            } else {
                db.set(`Level.Guild.${message.channel.guild.id}`, "on");
                message.channel.createMessage(idioma.level.status[0]);
            }
        } else {
            var user = {};

            if (message.mentions[0]) {
                const id = message.mentions[0].id;
                user = await this.client.getRESTGuildMember(message.channel.guild.id, id);
            } else if (args[0]) {
                try {
                    user = await this.client.getRESTGuildMember(message.channel.guild.id, args[0]);
                } catch {
                    message.channel.createMessage(idioma.userinfo.x)
                }
            } else {
                user = message.member;
            }

            const level = db.get(`Level.${user.id}`) ? db.get(`Level.${user.id}`) : 0;
            const level2 = db.get(`Level.${user.id}`) ? db.get(`Level.Global.${user.id}`) : 0;

            message.channel.createMessage(idioma.level.txt.replace("{user}", user.username).replace("{level}", level).replace("{level2}", level2));
        }
    }
}

module.exports = Level;