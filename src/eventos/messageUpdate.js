// DataBase
const DatabaseManager = require('denky-database')

const Database = new DatabaseManager('./src/complementos/db.json'); 

// Code
const {EventStructure} =  require("../handler_comandos/index");
const {get} = require("quick.db");
var cooldown = {}

class MessageUpdate extends EventStructure {
   constructor(client) {
      super(client, {
         name: "messageUpdate"
      })
   }
   async run(message) {
      
      if (message.author.bot) return; 
      if (message.channel.type === "dm") return;

      // Blacklist
      if (Database.get(`Blacklist.${message.member.id}`) === "sim") return;

      // Idioma
      const idioma = require(`../idiomas/${get(`Idioma_${message.member.id}`) || get(`Idioma_${message.channel.guild.id}`) || "pt"}`);

      // Nitro Pobre
      if (Database.get(`NitroPobre.${message.channel.guild.id}`) === "on") {
         let texto = message.content;
         if (texto.includes(":")) {
            let emoji = await this.client.guilds.filter(g => g).map(guild => guild.emojis.filter(emojis => emojis).map(e => e));
            if (!emoji) return;
                 var regex = new RegExp(`:${emoji.name}:`, 'g');
                 if (texto.includes(`:${emoji.name}:`)) texto = texto.replace(regex, emoji.toString());

             if (message.content != texto) {
               let web = await this.client.createChannelWebhook(message.channel.id, { name: message.member.nick });
            
                await this.client.executeWebhook(web.id, web.token, {content: texto, avatarURL: message.member.avatarURL.toString()}),
                this.client.deleteMessage(message.channel.id, message.id);
                this.client.deleteWebhook(web.id, web.token);

               }
      }
      }
      
      // Prefixo
      const prefix = Database.get(`Prefix.${message.channel.guild.id}`) ? Database.get(`Prefix.${message.channel.guild.id}`) : "a."; 

      // Menção
      if (message.content === `<@${this.client.user.id}>` || message.content === `<@!${this.client.user.id}>`) {
         message.channel.createMessage(idioma.mention.replace("{user}", message.member).replace("{prefix}", prefix).replace("{prefix}", prefix).replace("{commands}", `**${await this.client.commands.filter(cmd => cmd).map(a => a).length}**`))
      }

      // Sets
      if (!message.content.toLowerCase().startsWith(prefix)) return; 
      const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const clientCommand = this.client.commands.get(command) || this.client.commands.aliases.get(command);
      this.client.embedColor = Database.get(`Embeds.colors.${message.channel.guild.id}`) || 3092790;

      if (!clientCommand) return;

      // Cooldown 
      let uCooldown = cooldown[message.member.id];

      if (!uCooldown) {
        cooldown[message.member.id] = {};
        uCooldown = cooldown[message.member.id];
      }

      let time = uCooldown[clientCommand.name] ? uCooldown[clientCommand.name] : 10000;

      if (time && (time > Date.now())) return message.channel.createMessage({"content": message.member, "embed": {"description": `<:malFubukiSTOP:831987216300376074> ${idioma.handler.cooldown}`.replace("{time}", Math.ceil((time - Date.now()) / 1000)), "color": Database.get(`Embeds.colors.${message.channel.guild.id}`) ? Database.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790}});
    
      cooldown[message.member.id][clientCommand.name] = Date.now() + clientCommand.cooldown;

      // Erros - Edição de Mensagem
      if (!clientCommand) return;
      if (clientCommand.args && args.length < clientCommand.args.o) return message.channel.createMessage({"content": message.member, "embed": {"description": idioma.handler.no_args.replace("{prefix}", prefix).replace("{command}", clientCommand.name), "color": Database.get(`Embeds.colors.${message.channel.guild.id}`) ? Database.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790}});
      if (clientCommand.supportServerOnly && message.channel.guild.id !== "Your guild ID") return; 
      if (clientCommand.guildOwnerOnly && message.member.user.id !== message.channel.guild.ownerID) return; 
      if (clientCommand.clientPermissions && message.channel.guild && clientCommand.clientPermissions.find(p => !message.channel.guild.members.get(this.client.user.id).permission.has(p))) return;
      if (clientCommand.userPermissions && message.channel.guild && clientCommand.userPermissions.find(p => !message.member.permission.has(p))) {
         let perm = clientCommand.userPermissions.find(p => p) 
         return message.channel.createMessage({"content": message.member, "embed": {"description": idioma.handler.no_perm.replace("{perm}", perm).replace("{command}", clientCommand.name), "color": Database.get(`Embeds.colors.${message.channel.guild.id}`) ? Database.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790}})
      }; 
      if (clientCommand.nsfw && !message.channel.nsfw) return this.client.addMessageReaction(message.channel.id, message.id, "🔞", message.member.id); 
      if (clientCommand.ownerOnly && message.author.id !== "757928932199891094") return; 
      try { 
         // Executar comando
         await clientCommand.run(message, args, idioma, prefix, Database);
      } catch (err) {
         console.log(err);
      }
   }
}

module.exports = MessageUpdate;