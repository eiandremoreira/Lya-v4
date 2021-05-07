require("../complementos/mention");

// Handler
class Bot_Chan extends require("../handler_comandos/index").Client {
    constructor() {
       super({
          token: `Bot ${require("../jsons/client.config.json").token}`,
          eventsPath: "./src/eventos",
          commandsPath: "./src/comandos"
       });
    }
 }
 
 // Criação do Client
 const client = new Bot_Chan(`Bot ${require("../jsons/client.config.json").token}`, {
    restMode: true,
    intents: 1667,
    defaultImageSize: 2048
 })

 // Comandos Slash
 require('../complementos/slash')(client);
 console.log("Comandos slash iniciados!".magenta);
 
 // Conexão com a API
 client.connect();
