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
        const lang = get(`Idioma_${message.member.id}`) || get(`Idioma_${message.channel.guild.id}`) || "pt";

        if (args[0] === "dm" || !args[0]) {

            let embedBase = new MessageEmbed()

            var channel = "";
            if (args[0] === "dm") {
                try {
                    channel = await this.client.getDMChannel(message.member.id);
                    if (channel.createMessage({"embed": embedBase})) message.channel.createMessage("<:aqua_ok:833516112884662272> Verifique sua dm.")
                } catch (e) {
                    return message.channel.createMessage("Sua dm está fechada por favor deixe ela aberta!")
                }
            } else {
                channel = message.channel;
            }

            await channel.createMessage({"embed": {"color": 4360181, "description": idioma.help.embed_base.replace("{guild}", message.channel.guild.name).replace("{prefix}", prefix).replace("{prefix}", prefix).replace("{id}", this.client.user.id), "author": {"name": idioma.help.title_commandos, "icon_url": message.member.avatarURL}, "thumbnail": {"url": this.client.user.dynamicAvatarURL("png", 2048)}}});
            if (lang === "pt") {
                let cats = [...new Set(this.client.commands.filter(cmd => cmd.category.pt !== 'Desenvolvedor').map(cmd => cmd.category.pt))];
                for (const category of cats) {
                    await channel.createMessage({"embed": {"color": 4360181, "title": [category] + ` (${this.client.commands.filter(cmd => cmd.category.pt === category).length})`, "description": this.client.commands.filter(cmd => cmd.category.pt === category).map(cmd => `\`${prefix + cmd.name}\` \`${cmd.usage || idioma.help.err.no_use}\`\n${cmd.description.pt}`).join("\n")}});
                }
            } else {
                let cats = [...new Set(this.client.commands.filter(cmd => cmd.category.en !== 'Developer').map(cmd => cmd.category.en))];
                for (const category of cats) {
                    await channel.createMessage({"embed": {"color": 4360181, "title": [category] + ` (${this.client.commands.filter(cmd => cmd.category.en === category).length})`, "description": this.client.commands.filter(cmd => cmd.category.en === category).map(cmd => `\`${prefix + cmd.name}\` \`${cmd.usage || idioma.help.err.no_use}\`\n${cmd.description.en}`).join("\n")}});
                }
            }

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