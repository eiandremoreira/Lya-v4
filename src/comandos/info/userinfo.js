const {CommandStructure} = require("../../handler_comandos/index");
const parseMilliseconds = require('parse-ms');
const toFinite = require('lodash.tofinite');
const moment = require("moment-timezone");
const {get} = require("quick.db");

class Userinfo extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "userinfo",
            aliases: ["ui"],
            description: {
                pt: "Veja as informações de um usuário!",
                en: "See a user's information!"
            },
            usages: [
                "userinfo",
                "userinfo <@!757928932199891094>",
                "userinfo 757928932199891094"
            ],
            category: {
                pt: "ℹ️ Informação",
                en: "ℹ️ Information"
            },
            args: {
                n: 1,
                o: 0
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        var user = {};

        if (message.mentions[0]) {
            const id = message.mentions[0].id;
            user = await this.client.getRESTGuildMember(message.channel.guild.id, id);
        } else if (args[0]) {
            user = await this.client.getRESTGuildMember(message.channel.guild.id, args[0]);
        } else {
            user = message.member;
        }

        const lang = get(`Idioma_${message.member.id}`) || get(`Idioma_${message.channel.guild.id}`) || "pt";

        await moment.locale(lang);
        const data_criado = moment.utc(user.createdAt).tz(`${lang}`.replace("pt", "America/Sao_Paulo").replace("en", "America/New_Work")).format("LLLL");

        var permsIndex = 0;
        var i = 0;
        const perm = idioma.permissions
        let permissionsArray = [
        ['createInstantInvite', perm.P1], 
        ['kickMembers', perm.P2], 
        ['banMembers', perm.P3], 
        ['administrator', perm.P4],
        ['manageChannels', perm.P5],
        ['manageGuild', perm.P6],
        ['addReactions', perm.P7],
        ['viewAuditLogs', perm.P8],
        ['voicePrioritySpeaker', perm.P9],
        ['stream', perm.P10],
        ['readMessages', perm.P11],
        ['sendMessages', perm.P12],
        ['sendTTSMessages', perm.P32],
        ['manageMessages', perm.P13],
        ['embedLinks', perm.P14],
        ['attachFiles', perm.P15],
        ['readMessageHistory', perm.P16],
        ['mentionEveryone', perm.P17],
        ['externalEmojis', perm.P18],
        ['viewGuildInsights', perm.P19],
        ['voiceConnect', perm.P20],
        ['voiceSpeak', perm.P21],
        ['voiceMuteMembers', perm.P22],
        ['voiceDeafenMembers', perm.P23],
        ['voiceMoveMembers', perm.P24],
        ['voiceUseVAD', perm.P25],
        ['changeNickname', perm.P26],
        ['manageNicknames', perm.P27],
        ['manageRoles', perm.P28],
        ['manageWebhooks', perm.P29],
        ['manageEmojis', perm.P30],
        ['useSlashCommands', perm.P31]
    ]
    let permissionsMap;
    for (permsIndex=0; permsIndex<permissionsArray.length; permsIndex++) {
        if (!user.bot) {
            if (user.permissions.has(permissionsArray[permsIndex][0])) {
                permissionsMap += permissionsArray[permsIndex][1]+", ";
            } else {
                permissionsMap += '';
            }
        }
    }
    let criado = parseMilliseconds(await toFinite(user.createdAt - Date.now()));

        message.channel.createMessage({
            "embed": {
                "footer": {
                    "text": idioma.exe
                    .replace("{user}", `${message.member.username}#${message.member.discriminator}`),
                    "icon_url": message.member.avatarURL
                },                
                "author": {
                    "name": idioma.userinfo.title.replace("{user}", `${user.username}`),
                    "icon_url": user.avatarURL,
                    "url": `https://discord.com/users/${user.id}`
                },
                "thumbnail": {
                    "url": user.avatarURL
                },
                "fields": [
                    {
                        "name": idioma.userinfo.name,
                        "value": user.username
                    },
                    {
                        "name": idioma.userinfo.nickname,
                        "value": user.nick || user.username
                    },
                    {
                        "name": "ID",
                        "value": user.id
                    },
                    {
                        "name": idioma.userinfo.created,
                        "value": data_criado+`\n${criado.days} ${idioma.userinfo.days}, ${criado.hours} ${idioma.userinfo.hours} ${idioma.userinfo.and} ${criado.minutes} ${idioma.userinfo.minutes}`.replace("-", "").replace("-", "").replace("-", "")
                    },
                    {
                        "name": idioma.userinfo.permissions,
                        "value": `\`\`\`${permissionsMap || "?"}\`\`\``.replace("undefined", "")
                    }
                ],
                "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790
            }
        })
    }
}

module.exports = Userinfo;