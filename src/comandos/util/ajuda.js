const {CommandStructure} = require("../../handler_comandos/index");
const {get} = require("quick.db");
const LyaEmbedBuilder = require("../../complementos/EmbedBuilder/LyaEmbedBuilder");

class Ajuda extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "ajuda",
            aliases: ["help"],
            usage: "[cmd]",
            examples: [
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
                n: 1,
                c: 1
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        const lang = get(`Idioma_${message.member.id}`) || get(`Idioma_${message.channel.guild.id}`) || "pt";

        if (args[0] === "dm" || !args[0]) {

            var channel = "";
            if (args[0] === "dm") {
                try {
                    channel = await this.client.getDMChannel(message.member.id);
                    message.channel.createMessage("<:aqua_ok:833516112884662272> Verifique sua dm.")
                } catch (e) {
                    return message.channel.createMessage("Sua dm está fechada por favor deixe ela aberta!")
                }
            } else {
                channel = message.channel;
            }

            let embed = new LyaEmbedBuilder();
            await channel.createMessage({"embed": {"color": 4360181, "description": idioma.help.embed_base.replace("{guild}", message.channel.guild.name).replace("{prefix}", prefix).replace("{prefix}", prefix).replace("{id}", this.client.user.id), "author": {"name": idioma.help.title_commandos, "icon_url": message.member.avatarURL}, "thumbnail": {"url": this.client.user.dynamicAvatarURL("png", 2048)}}});
            if (lang === "pt") {
                let cats = [...new Set(this.client.commands.filter(cmd => cmd.category.pt !== 'Desenvolvedor').map(cmd => cmd.category.pt))];
                for (const category of cats) {
                    embed.thumbnail(this.client.user.dynamicAvatarURL("png", 2048), {height: 2048, width: 2048})
                    embed.field([category] + ` (${this.client.commands.filter(cmd => cmd.category.pt === category).length})`, this.client.commands.filter(cmd => cmd.category.pt === category).map(cmd => `**${prefix}**\`${cmd.name}\` \`${cmd.usage || idioma.help.err.no_use}\`\n${cmd.description.pt}`).join("\n"))
                    embed.color(4360181)
                }
                channel.createMessage(embed.create);
            } else {
                let cats = [...new Set(this.client.commands.filter(cmd => cmd.category.en !== 'Developer').map(cmd => cmd.category.en))];
                for (const category of cats) {
                    embed.setThumbnail(this.client.user.dynamicAvatarURL("png", 2048))
                    embed.addField([category] + ` (${this.client.commands.filter(cmd => cmd.category.en === category).length})`, this.client.commands.filter(cmd => cmd.category.en === category).map(cmd => `**${prefix}**\`${cmd.name}\` \`${cmd.usage || idioma.help.err.no_use}\`\n${cmd.description.en}`).join("\n"))
                    embed.setColor("BLUE")
                }
                channel.createMessage({"embed": embed});
            }

        } else if (args[0]) {
            const command = this.client.commands.get(args[0]) || this.client.commands.aliases.get(args[0]);
            if (!command) return;

            var desc = {}
    
            if (lang === "pt") desc = command.description.pt;
            else desc = command.description.en;
    
            var alias = {};
            var examples = {};
            var category = {};
            const usage = await command.usage;
    
            if (command.aliases) alias = await command.aliases.join(" | ");
            if (lang === "pt") category = command.category.pt;
            else category = command.category.en;
            if (command.examples) examples = "» "+prefix+command.examples.join(`\n» ${prefix}`);
            else examples = idioma.help.err.no_examples;
    
            let argsN = command.args.n || 0;
            let argsO = command.args.o || 0;
            let argsM = command.args.m || 0;
            let argsR = command.args.r || 0;
            let argsC = command.args.c || 0;
            let argsTotal = argsM + argsR + argsC;

            message.channel.createMessage({
                "content": message.member,
                "embed": {
                    "color": this.client.embedColor,
                    "author": {
                        "icon_url": message.member.avatarURL,
                        "name": idioma.help.title_commando
                    },
                    "description": `✍️ ${desc}`,
                    "fields": [
                    {
                        "name": `🧐 ${idioma.help.name}`,
                        "value": command.name,
                        "inline": true
                    },
                    {
                        "name": `📖 ${idioma.help.usage}`,
                        "value": usage || idioma.help.err.no_use,
                        "inline": true
                    },
                    {
                        "name": `🔀 ${idioma.help.aliases}`,
                        "value": alias || idioma.help.err.no_alias,
                        "inline": true
                    },
                    {
                        "name": `🔎 ${idioma.help.args}`,
                        "value": `⤷ ${idioma.help.args_t} ${argsTotal}\n⤷ ${idioma.help.args_o} ${argsO}\n⤷ ${idioma.help.args_n} ${argsN}\n⤷ ${idioma.help.args_m} ${argsM}\n⤷ ${idioma.help.args_r} ${argsR}\n⤷ ${idioma.help.args_c} ${argsC}`,
                        "inline": true
                    },
                    {
                        "name": `📚 ${idioma.help.examples}`,
                        "value": examples,
                        "inline": true
                    },
                    {
                        "name": "📁 "+idioma.help.category,
                        "value": `${category}`,
                        "inline": true
                    },
                ],
                    "footer": {
                        "text": idioma.exe
                        .replace("{user}", `${message.member.username}#${message.member.discriminator}`),
                        "icon_url": message.member.avatarURL
                    },
                    "thumbnail": {
                        "url":this.client.user.dynamicAvatarURL("png", 2048)
                    }
                }
            })
        }
    }
}

module.exports = Ajuda;