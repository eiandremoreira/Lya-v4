const { CommandStructure } = require("../../handler_comandos");

class Logs extends CommandStructure {
    structure(client) {
        super(client, {
            name: "logs",
            usage: "<log num> <config>",
            usages: [
                "logs 1 #bem-vindo Bem vindo!",
                "logs 2 #adeus Adeus!",
                "logs 3 #banidos",
                "logs 4 #expulsos",
                "logs 5 #mutados",
                "logs 6 #mensagens-editadas",
                "logs 7 #mensagens-apagadas",
                "logs 8 #mudou-avatar",
                "logs 9 #mudou-nome",
                "logs 10 #entrou-saiu-de-call"
            ],
            description: {
                pt: "Configure as logs do servidor!",
                en: "Configure the guild logs!"
            },
            category: {
                pt: "⚙️ Configuração",
                en: "⚙️ Configuration"
            },
            args: {
                n: 0,
                o: 0
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        let num = args[0];
        if (!num || isNaN(num)) return message.channel.createMessage("teste alek")
    }
}