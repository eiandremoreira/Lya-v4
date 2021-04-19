"use strict";

const { CommandStructure } = require("../../handler_comandos/index");

class Eval extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "eval",
            ownerOnly: true,
            description: {
                pt: "oi?",
                en: "hi?"
            },
            category: {
                pt: "Desenvolvedor",
                en: "Developer"
            },
            args: {
                o: 1,
                n: 0
            }
        })
    }
    async run (message, args, idioma, prefix, db) {
        try {
            let r = await eval(message.content.slice(prefix.length).trim().split(/ +/g).slice(1).join(" "));
            if (r instanceof Promise) await r;
            if (typeof result !== 'string') r = require('util').inspect(r);
            if (r) {
                message.channel.createMessage(`\`\`\`js\n${r.slice(0, 1900)}\`\`\``)
            }
        } catch (e) {
            message.channel.createMessage(`\`\`\`js\n${e.stack.slice(0, 2000)}\`\`\``)
        }
    }
}

module.exports = Eval;