const {CommandStructure} = require("../../handler_comandos/index");
const {get} = require("quick.db");
const { MessageEmbed } = require("discord.js");

class Ajuda extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "ajuda",
            aliases: ["help"],
            usage: "[cmd | cat]",
            usages: [
                "ajuda",
                "ajuda util",
                "ajuda idioma"
            ],
            category: {
                pt: "🔩 Util",
                en: "🔩 Util"
            },
            description: {
                pt: "Veja minha lista de comandos!",
                en: "View my command list!"
            },
            args: {
                n: 0,
                o: 0
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        const commands = await this.client.commands;
        const lang = get(`Idioma_${message.member.id}`) || get(`Idioma_${message.channel.guild.id}`) || "pt";

        if (!args[0]) {
            let embed = new MessageEmbed()
            embed.setColor(db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790);
            embed.setThumbnail(this.client.user.avatarURL);
            embed.setFooter(idioma.exe.replace("{user}", `${message.member.username}#${message.member.discriminator}`), message.member.avatarURL);
            embed.setAuthor(idioma.help.title_commandos, message.member.avatarURL);

            let cat = await commands.filter(cmd => cmd.category).map((c) => {
                var u = {};
                u = c.usage || idioma.help.err.no_use;
                var cat = {};
                var dec = {};
                var desc = {};

                if (!c.description.pt || !c.description.en) desc = idioma.help.err.no_desc;
                else if (lang === "pt") desc = c.description.pt;
                else c.description.en;

                if (lang === "pt") cat = c.category.pt, dec = desc;
                else cat = c.category.en, dec = desc;    

                return `**${cat}** - ${c.name} \`${u}\`\n${dec}`;

            }).join("\n")
            embed.setDescription(cat)
            message.channel.createMessage({"embed": embed})

        } else if (args[0]) {
            const command = this.client.commands.get(args[0]) || this.client.commands.aliases.get(args[0]);
            if (!command) return;

            var desc = {}
    
            if (lang === "pt") desc = command.description.pt;
            else desc = command.description.en;
    
            var alias = {};
            var usages = {};
            var category = {};
            const usage = await command.usage;
    
            if (command.aliases) alias = await command.aliases.join(" | ")+".";
            if (lang === "pt") category = command.category.pt;
            else category = command.category.en;
            if (command.usages) usages = "🌺 "+prefix+command.usages.join(`\n🌺 ${prefix}`);
            else usages = idioma.help.err.no_usages;
    
            message.channel.createMessage({
                "content": message.member,
                "embed": {
                    "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790,
                    "author": {
                        "icon_url": message.member.avatarURL,
                        "name": idioma.help.title_commando
                    },
                    "description": `🧐 ${idioma.help.name}\n${command.name}\n✍️ ${idioma.help.description}\n${desc}\n🔀 ${idioma.help.aliases}\n${alias || idioma.help.err.no_alias}\n📖 ${idioma.help.usage}\n${usage || idioma.help.err.no_use}\n📚 ${idioma.help.usages}\n${usages}`,
                    "fields": [{
                        "name": "📁 "+idioma.help.category,
                        "value": `${category}`
                    },
                    {
                        "name": `🔎 ${idioma.help.args}`,
                        "value": `${idioma.help.args_t} ${command.args.n?command.args.n.length:0 + command.args.o?command.args.o:0}\n${idioma.help.args_o} ${command.args.o || "0"}\n${idioma.help.args_n} ${command.args.n || "0"}`
                    }],
                    "footer": {
                        "text": idioma.exe
                        .replace("{user}", `${message.member.username}#${message.member.discriminator}`),
                        "icon_url": message.member.avatarURL
                    },
                    "thumbnail": {
                        "url": this.client.user.avatarURL
                    }
                }
            })
        }
    }
}

module.exports = Ajuda;