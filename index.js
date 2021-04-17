// Requires
require("colors");
require("eris-reactions");
require("./src/complementos/mention");
require("eris-collector");
require("eris-additions");

// Handler
class Bot_Chan extends require("./src/handler_comandos/index").Client {
   constructor() {
      super({
         token: require("./src/jsons/client.config.json").token,
         eventsPath: "./src/eventos",
         commandsPath: "./src/comandos"
      });
   }
}

// Conexão com API
new Bot_Chan(require("./src/jsons/client.config.json").token, {
   restMode: true
}).connect(); 
