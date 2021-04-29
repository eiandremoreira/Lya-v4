const {CommandStructure} = require("../../handler_comandos/index");

class Leaderboard extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "leaderboard",
            aliases: ["rank"],
            description: {
                pt: "Veja as pessoas mais ricas de todos os servidores!",
                en: "See the richest people on the all guilds!"
            },
            category: {
                pt: "💸 Economia",
                en: "💸 Economy"  
            },
            args: {
                n: 0,
                o: 0
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        let msg = await message.channel.createMessage({content: idioma.leaderboard.loading, messageReferenceID: message.id});
        let money = db.all().filter(data => data[0].startsWith("Money")).map(data => data).sort((a, b) => (a[1] < b[1]) ? 1 : -1)
        let rank = db.all().filter(data => data[0].startsWith("Money")).map(data => data).sort((a, b) => (a[1] < b[1]) ? 1 : -1)

        money.length = 15;
        var finalLb = "";
        var posicao = 0;
        var i = 0;
        let indexnum = 0;
        for (i in money) {
            let nome = await this.client.getRESTUser(money[i][0].split(".")[1])
            if (!finalLb.includes(nome.username)) {
                if (rank[i][0].split(".")[1].includes(message.member.id)) posicao = await indexnum + 1;
                finalLb += `**${++indexnum}. ${nome.username}** » ${money[i][1].toLocaleString()} :yen:\n`;                
            }
        }

        await message.channel.createMessage({"embed": {"thumbnail": {"url": await message.channel.guild.iconURL}, "title": idioma.leaderboard.title, "description": finalLb, "footer": {"text": idioma.leaderboard.footer + posicao}, "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790}})
        message.channel.deleteMessage(msg.id);

    }
}

module.exports = Leaderboard;