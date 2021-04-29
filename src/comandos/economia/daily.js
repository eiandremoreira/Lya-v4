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
        const data_db = db.get(`Daily.Day.${message.member.id}`) ? db.get(`Daily.Day.${message.member.id}`) : 0;

        const tempo = parseMilliseconds(86400000 - (Date.now() - db.get(`Daily.Ms.${message.member.id}`)));
        if (db.get(`Daily.Ms.${message.member.id}`) !== null && 86400000 - (Date.now() - db.get(`Daily.Ms.${message.member.id}`)) > 0) return message.channel.createMessage({content: idioma.daily.x.replace("{h}", tempo.hours+"h").replace("{m}", tempo.minutes+"m").replace("{s}", tempo.seconds+"s"), messageReferenceID: message.id });
       
        db.set(`Daily.Ms.${message.member.id}`, Date.now());

        let quantia = Math.floor(Math.random() * (20000 - 7000)) + 7000;

        if (!db.get(`Money.${message.member.id}`)) {
            await db.set(`Money.${message.member.id}`, quantia);
        } else {
            db.add(`Money.${message.member.id}`, quantia);
        }
        
        message.channel.createMessage(`${message.member}\n${idioma.daily.txt}`.replace("{quantia}", quantia.toLocaleString()), 
        {
            file: await read("./src/images/a.jpg"),
            name: "daily.jpg",
        })

    }
}

module.exports = Daily;