const { CommandStructure } = require("../../handler_comandos");
const parseMilliseconds = require('parse-ms');
const toFinite = require('lodash.tofinite');
const moment = require("moment-timezone");
const { get } = require("quick.db");

class Serverinfo extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "serverinfo",
            aliases: ["si", "infoserver"],
            description: {
                pt: "Exibe as informações de um servidor",
                en: "Displays information for a guild"
            },
            category: {
                pt: "ℹ️ Informação",
                en: "ℹ️ Information"
            },
            usages: [
                "serverinfo",
                "serverinfo 779667611235123221"
            ],
            args: {
                o: 0,
                n: 1
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        var guild = {};

        if (args[0]) {
            guild = this.client.getRESTGuild(args[0], true);
        } else {
            guild = message.channel.guild
        }

        const lang = get(`Idioma_${message.member.id}`) || get(`Idioma_${message.channel.guild.id}`) || "pt";

        const id = guild.id;
        const name = await guild.name;
        const banner = guild.bannerURL;
        const icon = guild.iconURL;
        const members = guild.memberCount;
        const splash = guild.splashURL;
        const region = guild.region;
        const verif = guild.verificationLevel;
        const emojis = await guild.emojis.length;
        const roles = await guild.roles.filter(x => x).map(x => x.name).join(", ");
        const rolesCount = await guild.roles.filter(x => x).length;
        const channels = await guild.channels.filter(x => x).map(x => x.name).join(", ");
        await moment.locale(lang);
        const data_criado = moment.utc(guild.createdAt).tz(`${lang}`.replace("pt", "America/Sao_Paulo").replace("en", "America/New_Work")).format("LLLL");
        const criado = parseMilliseconds(await toFinite(guild.createdAt - Date.now()));
        const data_entrada = moment.utc(guild.joinedAt).tz(`${lang}`.replace("pt", "America/Sao_Paulo").replace("en", "America/New_Work")).format("LLLL");
        const entrada = parseMilliseconds(await toFinite(guild.joinedAt - Date.now()));
        message.channel.createMessage({
            "embed": {
                "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790,
                "thumbnail": {
                    "url": icon
                },
                "image": {
                    "url": banner
                },
                "fields": [
                    {
                        "name": ":face_with_monocle:"+idioma.serverinfo.name,
                        "value": name,
                        "inline": true
                    },
                    {
                        "name": ":id: ID",
                        "value": id,
                        "inline": true
                    },
                    {
                        "name": "🌎 "+idioma.serverinfo.region,
                        "value": region,
                        "inline": true
                    },
                    {
                        "name": "🛡️ "+idioma.serverinfo.verifi,
                        "value": verif,
                        "inline": true
                    },
                    {
                        "name": "👥 "+idioma.serverinfo.members,
                        "value": members,
                        "inline": true
                    },
                    {
                        "name": "🥰 Emojis",
                        "value": emojis || "0",
                        "inline": true  
                    },
                    {
                        "name": ":calendar: "+idioma.serverinfo.created,
                        "value": data_criado+`\n${criado.days} ${idioma.userinfo.days}, ${criado.hours} ${idioma.userinfo.hours} ${idioma.userinfo.and} ${criado.minutes} ${idioma.userinfo.minutes}`.replace("-", "").replace("-", "").replace("-", ""),
                        "inline": true
                    },
                    {
                        "name": "👋 "+idioma.serverinfo.joined,
                        "value": data_entrada+`\n${entrada.days} ${idioma.userinfo.days}, ${criado.hours} ${idioma.userinfo.hours} ${idioma.userinfo.and} ${criado.minutes} ${idioma.userinfo.minutes}`.replace("-", "").replace("-", "").replace("-", ""),
                        "inline": true
                    }
                ],
                "footer": {
                    "text": idioma.exe
                    .replace("{user}", `${message.member.username}#${message.member.discriminator}`),
                    "icon_url": message.member.avatarURL
                },  
            }
        })
    }
}

module.exports = Serverinfo;