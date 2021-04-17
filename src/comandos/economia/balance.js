const { CommandStructure } = require("../../handler_comandos/index");

class Balance extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "balance",
            aliases: ["saldo"],
            cooldown: 15000,
            args: {
                o: 0,
                n: 1
            },
            usages: [
                "balance",
                "balance <@!757928932199891094>",
                "balance 757928932199891094"
            ],
            description: {
                pt: "Veja o seu saldo!",
                en: "View your balance!"
            },
            category: {
                pt: "💸 Economia",
                en: "💸 Economy"
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        var user = {};

        if (message.mentions[0]) {
            user = await this.client.getRESTGuildMember(message.channel.guild.id, message.mentions[0].id);
        } else if (args[0]) {
            user = await this.client.getRESTGuildMember(message.channel.guild.id, args[0]);
        } else {
            user = message.member;
        }

        const money = db.get(`Money.${user.id}`) ? db.get(`Money.${user.id}`) : 0;
        const bank = db.get(`Money.Bank.${user.id}`) ? db.get(`Money.Bank.${user.id}`) : 0;

        message.channel.createMessage({
            "embed": {
                "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790,
                "author": {
                    "name": idioma.balance.desc.replace("{user}", `${user.username}#${user.discriminator}`),
                    "icon_url": user.avatarURL
                },
                "fields": [
                    {
                        "name": idioma.balance.wallet,
                        "value": `${money} :yen:`,
                        "inline": true
                    },
                    {
                        "name": idioma.balance.bank,
                        "value": `${bank} :yen:`,
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

module.exports = Balance;