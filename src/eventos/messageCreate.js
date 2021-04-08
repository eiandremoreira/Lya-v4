const {EventStructure} =  require("../handler_comandos/index");
const {get} = require("quick.db");

class MessageCreate extends EventStructure {
   constructor(client) {
      super(client, {
         name: "messageCreate"
      })
   }
   async run(message) {
      if (message.author.bot) return; 
      const prefix = "abal!" 
      if (!message.content.toLowerCase().startsWith(prefix)) return; 
      const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
      const idioma = require(`../idiomas/${get(`Idioma_${message.member.id}`) || get(`Idioma_${message.channel.guild.id}`) || "pt"}`);
      const command = args.shift().toLowerCase();
      const clientCommand = this.client.commands.get(command) || this.client.commands.aliases.get(command);
      if (!clientCommand) return;
      if (clientCommand.args && args.length < clientCommand.args.o) return message.channel.createMessage({"content": message.member, "embed": {"description": idioma.handler.no_args.replace("{prefix}", prefix).replace("{command}", clientCommand.name), "color": 3092790}});
      if (clientCommand.supportServerOnly && message.channel.guild.id !== "Your guild ID") return; 
      if (clientCommand.guildOwnerOnly && message.member.user.id !== message.channel.guild.ownerID) return; 
      if (clientCommand.clientPermissions && message.channel.guild && clientCommand.clientPermissions.find(p => !message.channel.guild.members.get(this.client.user.id).permission.has(p))) return;
      if (clientCommand.userPermissions && message.channel.guild && clientCommand.userPermissions.find(p => !message.member.permission.has(p))) return; 
      if (clientCommand.nsfw && !message.channel.nsfw) return this.client.addMessageReaction(message.channel.id, message.id, "🔞", message.member.id); 
      if (clientCommand.ownerOnly && message.author.id !== "757928932199891094") return; 
      try { 
         await clientCommand.run(message, args, idioma, prefix);
      } catch (err) {
         console.log(err);
      }
   }
}

module.exports = MessageCreate;