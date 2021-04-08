const {EventStructure} =  require("../handler_comandos/index");

class ReadyEvent extends EventStructure {
    constructor(client) {
       super(client, {
          name: "ready"
       });
    }
    run() {
      console.log(`Conectado na conta ${this.client.user.username+"#"+this.client.user.discriminator}`.brightBlue);
    }
 }

 module.exports = ReadyEvent;