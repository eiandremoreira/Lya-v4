const {CommandStructure} = require("../../handler_comandos/index");

class Avatar extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "avatar",
            aliases: ["av"],
            usage: "[@user]",
            category: {
                pt: "🔩 Util",
                en: "🔩 Util"
            },
            description: {
                pt: "Veja o avatar de alguém!",
                en: "See someone's avatar!"
            },
            examples: [
                "avatar <@757928932199891094>",
                "avatar 757928932199891094"
            ],
            args: {
                n: 1,
                o: 0
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        var user = {};

        if (message.mentions[0]) {
            user = message.mentions[0];
        } else if (args[0]) {
            user = await this.client.getRESTGuildMember(message.channel.guild.id, args);
        } else {
            user = message.member;
        }

        const avatar = await user.avatarURL

        message.channel.createMessage({"content": message.member, 
        "embed": {
            "image": {
                "url": avatar
            },
            "description": idioma.avatar.txt2,
            "footer": {
                "text": idioma.exe
                .replace("{user}", message.member.username+"#"+message.member.discriminator),
                "icon_url": message.member.avatarURL
            },
            "author": {
                "name": idioma.avatar.txt1
                .replace("{user}", `${user.username}#${user.discriminator}`),
                "icon_url": avatar,
                "url": avatar
            },
            "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790
        }})
    }
}

module.exports = Avatar;
