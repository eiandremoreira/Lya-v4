const {CommandStructure} = require("../../handler_comandos/index");

class Pagar extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "pagar",
            aliases: ["pay"],
            usage: "<@user> <num>",
            examples: [
                "pagar <@!757928932199891094> 1k",
                "pagar <757928932199891094 1k"
            ],
            description: {
                pt: "Pague alguém!",
                en: "Pay someone!"
            },
            category: {
                pt: "💸 Economia",
                en: "💸 Economy"
            },
            args: {
                o: 2,
                m: 1, 
                c: 1
            }
        })   
    }
    async run(message, args, idioma, prefix, db) {
        var user = "";
        if (message.mentions[0]) {
            const id = message.mentions[0].id;
            user = await this.client.getRESTGuildMember(message.channel.guild.id, id);
        } else {
            try {
                user = await this.client.getRESTGuildMember(message.channel.guild.id, args[1]);
            } catch {
                message.channel.createMessage(idioma.userinfo.x);
            }
        }

        let quantia = args[1].toLowerCase().replace("k", "000").replace("m", "000000").replace("b", "000000");;
        if (isNaN(quantia)) return message.channel.createMessage(idioma.depositar.x1);

        const money = db.get(`Money.${message.member.id}`) ? db.get(`Money.${message.member.id}`) : 0;
        const bank = db.get(`Money/Bank.${message.member.id}`) ? db.get(`Money/Bank.${message.member.id}`) : 0;

        var dinheiro = 0;

        if (quantia > money) {
            if (quantia > bank) return message.channel.createMessage(idioma.pagar.x);
            else dinheiro = bank;
        } else {
            dinheiro = money;
        }
        
        if (!db.get(`Money.${user.id}`)) await db.set(`Money.${user.id}`, 0);

        if (dinheiro === money) {
            db.remove(`Money.${message.member.id}`, parseInt(quantia));
        } else {
            db.remove(`Money/Bank.${message.member.id}`, parseInt(quantia));
        }

        await db.add(`Money.${user.id}`, parseInt(quantia));

        message.channel.createMessage(idioma.pagar.txt.replace("{quantia}", quantia).replace("{user}", user));
    }
}

module.exports = Pagar;