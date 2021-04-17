const {EventStructure} =  require("../handler_comandos/index");

class ReadyEvent extends EventStructure {
    constructor(client) {
       super(client, {
          name: "ready"
       });
    }
    async run() {
      console.log(`Conectado na conta ${this.client.user.username+"#"+this.client.user.discriminator}`.brightBlue);
      const guilds = this.client.guilds.size;
      this.client.editStatus("online", {game: "add me", name: `💪 My Hero Academia | ${guilds} servers | lya!vote | v4`, type: 0})
    }
 }

 module.exports = ReadyEvent;