const { CommandStructure } = require("../../handler_comandos/index");

class Rolar_Dados extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "rolar_dados",
            aliases: ["roll_dices"],
            description: {
                pt: "Aposte e ganhe ou perca dinheiro!",
                pt: "Bet and win or lose money!"
            },
            examples: [
                "rolar_dados 9 <@!757928932199891094> 15k",
                "rolar_dados 9 757928932199891094 15k"
            ],
            category: {
                pt: "💸 Economia",
                en: "💸 Economy"
            },
            args: {
                o: 3,
                m: 1,
                c: 2
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        var user = "";
        if (message.mentions[0]) {
            user = await message.mentions[0];
        } else {
            try {
                user = await this.client.getRESTGuildMember(message.channel.guild.id, args[1]);
            } catch {
                message.channel.createMessage(idioma.userinfo.x);
            }
        }

        if (user.id === message.author.id) return message.channel.createMessage(idioma.rolldice.x3)

        const valor1 = args[2];
        const value = args[0];
        
        let moneyUser1 = db.get(`Money.${message.member.id}`) ? db.get(`Money.${message.member.id}`) : 0;
        let moneyUser2 = db.get(`Money.${user.id}`) ? db.get(`Money.${user.id}`) : 0;

        if (moneyUser1 < valor1) return message.channel.createMessage(idioma.rolldice.x5);
        if (moneyUser2 < valor1) return message.channel.createMessage(idioma.rolldice.x6.replace("{user}", user));


        if (isNaN(value)) return message.channel.createMessage(idioma.rolldice.x);
        if (value > 12 || value === 0) return message.channel.createMessage(idioma.rolldice.x2) 


        await message.channel.createMessage(`${user}, ${message.member} ${idioma.rolldice.txt}`.replace("{quantia}", args[2]));

        var respondeu = false;

        this.client.on("messageCreate", async msg => {
            if (respondeu) return;
            if (!msg.author.id === user.id) return;
            if (!msg.content.toLowerCase().includes("sim"||"yes")) return;

            let msgArgs = msg.content.toLowerCase().slice("sim"||"yes").trim().split(/ +/g).slice(1).join(" ");

            if (!msgArgs) return message.channel.createMessage(idioma.rolldice.x4);

            const valor2 = parseInt(msgArgs);
            if (isNaN(valor2)) return message.channel.createMessage(idioma.rolldice.x);
            if (valor2 > 12 || valor2 === 0) return message.channel.createMessage(idioma.rolldice.x2) 

            let dado1 = Math.round(Math.random() * (6 - 1)) + 1;
            let dado2 = Math.round(Math.random() * (6 - 1)) + 1;

            let total = dado1 + dado2;

            let win1 = Math.abs(valor1 - total);
            let win2 = Math.abs(valor2 - total);

            let a = win1 < win2;
            var value = 0;

            var winner = "";
            var loser = "";
            if (total < win1 + win2) {
                winner = a ? message.member : user;
                loser = a ? user : message.member;
                value = a ? valor1 : valor2;
            } else {
                winner = a ? user : message.member;
                loser = a ? message.member : user;
                value = a ? valor2 : valor1;
            }

            await db.add(`Money.${winner.id}`, parseInt(args[2]));
            await db.remove(`Money.${loser.id}`, parseInt(args[2]));

            await message.channel.createMessage(idioma.rolldice.win.replace("{dado1}", dado1).replace("{dado2}", dado2).replace("{total}", total).replace("{winner}", winner).replace("{value}", value));
            respondeu = true
        }) 
    }
}

module.exports = Rolar_Dados;