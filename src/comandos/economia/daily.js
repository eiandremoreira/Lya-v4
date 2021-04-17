const { CommandStructure } = require("../../handler_comandos");
const { utc } = require("moment-timezone");
const { readFile } = require("fs");
const parseMilliseconds = require('parse-ms');
const util = require('util');
const read = util.promisify(readFile);

class Daily extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "daily",
            aliases: ["diária"],
            description: {
                pt: "Pegue seu prêmio diário!",
                en: "Pick your daily prize!"
            },
            category: {
                pt: "💸 Economia",
                en: "💸 Economy"
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        const data = parseInt(utc(Date.now()).format("DD"));
        const data_ms = Date.now();
        const data_db = db.get(`Daily.Day.${message.member.id}`) ? db.get(`Daily.Day.${message.member.id}`) : 0;

        if (data > data_db) {
            db.set(`Daily.Day.${message.member.id}`, data);
            db.set(`Daily.Ms.${message.member.id}`, data_ms);
        }
        const tempo = parseMilliseconds(db.get(`Daily.Ms.${message.member.id}`) - (Date.now() - db.get(`Daily.Ms.${message.member.id}`)));
        if (data === !data_db) return message.channel.createMessage({content: `<:malFubukiSTOP:831987216300376074> Qual é meno espera ai na moralzinha beleuza?\n**Tempo:** \`${tempo.hours}\`, \`${tempo.minutes}\`, \`${tempo.seconds}\``, messageReferenceID: message.id });

        let quantia = Math.floor(Math.random() * (20000 - 7000)) + 7000;

        if (!db.get(`Money.${message.member.id}`)) {
            await db.set(`Money.${message.member.id}`, 0);
            db.add(`Money.${message.member.id}`, quantia);
        } else {
            db.add(`Money.${message.member.id}`, quantia);
        }

        /**
         *         
         * {
            file: await read("./src/images/a.jpg"),
            name: "presente.jpg",
        }
         */
        
        message.channel.createMessage(`${message.member}\nParabéns você pegou seu prêmio diário e recebeu **${quantia}** :yen:\nVolte amanhã para receber seu prêmio novamente <a:yay:832444773407260692>`, 
        {
            file: await read("./src/images/a.jpg"),
            name: "presente.jpg",
        })

    }
}

module.exports = Daily;