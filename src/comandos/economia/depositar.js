const {CommandStructure} = require("../../handler_comandos/index");

class Depositar extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "depositar",
            aliases: ["dep", "deposit"],
            category: {
                pt: "💸 Economia",
                en: "💸 Economy"
            },
            description: {
                pt: "Deposite dinheiro no seu banco",
                en: "Deposit money in your bank"
            },
            examples: [
                "depositar 5k",
                "depositar all"
            ],
            args: {
                o: 1,
                n: 2, 
                c: 2
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        let money = db.get(`Money.${message.member.id}`) ? db.get(`Money.${message.member.id}`) : 0;
        if (money === 0) return message.channel.createMessage(idioma.depositar.x);
        if (args[0] === "all") {
            await db.remove(`Money.${message.member.id}`, money);
            
            if (!db.get(`Money/Bank.${message.member.id}`)) {
                await db.set(`Money/Bank.${message.member.id}`, money);
            } else {
                db.add(`Money/Bank.${message.member.id}`, money);
            }

            message.channel.createMessage(idioma.depositar.txt.replace("{quantia}", money.toLocaleString()))
        } else {
            let quantia = args[0].toLowerCase().replace("k", "000").replace("m", "000000").replace("b", "000000");
            if (isNaN(quantia)) return message.channel.createMessage(idioma.depositar.x1);
            if (parseInt(quantia) > money) return message.channel.createMessage(idioma.depositar.x2);

            await db.remove(`Money.${message.member.id}`, parseInt(quantia));

            if (!db.get(`Money/Bank.${message.member.id}`)) {
                await db.set(`Money/Bank.${message.member.id}`, parseInt(quantia));
            } else {
                db.add(`Money/Bank.${message.member.id}`, parseInt(quantia));
            }

            message.channel.createMessage(idioma.depositar.txt.replace("{quantia}", parseInt(quantia).toLocaleString()))

        }
    }
}

module.exports = Depositar