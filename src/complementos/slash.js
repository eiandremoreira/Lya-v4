const Eris = require("eris");
const {get} = require("quick.db");

// Créditos Veric#0311 por fazer a base ;);

module.exports = async (client) => {
    client.on("rawWS", async(packet) => {
        if (packet.t === "INTERACTION_CREATE") {
            let interaction = packet.d;

            if(!interaction.member) {
                client.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                        type: 4,
                        data: {
                            content:
                                'Eu não suporte comandos na dm',
                        },
                    },
                });
            }
            
            if (!client.getRESTGuild(interaction.guild_id)) {
                client.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                        type: 4,
                        data: {
                            content:
                                'Eu não fui adicionada corretamente!',
                        },
                    },
                });
                return;
            }

            const comando = client.commands.get(interaction.data.name);

            if (!comando) return;

            interaction.mentions = [];
            interaction.mention_everyone = false;

            interaction.mention_roles = new Eris.Collection();

            if (
                interaction.data &&
                interaction.data.resolved &&
                interaction.data.resolved.users
            ) {
                for (const membro in interaction.data.resolved.users) {
                    // Adiciona o objeto do membro no Message.mentions.members
                    interaction.data.resolved.users[membro].member =
                        interaction.data.resolved.members[membro];
    
                    // Adiciona o objeto do usuário no Message.mentions.users
                    interaction.mentions.push(interaction.data.resolved.users[membro]);
                }
            }

            if (
                interaction.data &&
                interaction.data.resolved &&
                interaction.data.resolved.roles
            ) {
                for (const cargo in interaction.data.resolved.roles) {
                    // Define o cargo na collection[id, properties]
                    interaction.mention_roles.set(
                        cargo,
                        client.guilds
                            .cache.get(interaction.guild_id)
                            .roles.cache.get(interaction.data.resolved.roles[cargo]),
                    );
                }
            }

            const args = interaction.data.options
			? interaction.data.options.map((i) => {
				switch (i.type) {
				case 8:
					return `<@&${i.value}>`;
					break;
				case 6:
					`<@!${i.value}>`;
					break;
				case 7:
					return `<#${i.value}>`;
					break;
				default:
					return i.value;
					break;
				}
			  })
			: [];

            interaction.content = (interaction.data.name + ' ' + args.join(' ')).trim();

            interaction.author = new Eris.User(interaction.member.user, client);

            interaction.mentions[0] = client.user;

            
         const msg = new Eris.Message(interaction, client);

         const idioma = require(`../idiomas/${get(`Idioma_${interaction.member.user.id}`) || get(`Idioma_${msg.channel.guild.id}`) || "pt"}`);
         const DatabaseManager = require('denky-database')

         const Database = new DatabaseManager('./src/complementos/db.json'); 
         const prefix = Database.get(`Prefix.${msg.channel.guild.id}`) ? Database.get(`Prefix.${msg.channel.guild.id}`) : "lya!"; 

         await client.requestHandler.request("POST", `/interactions/${interaction.id}/${interaction.token}/callback`, false, {
            type: 4,
            data: {
                content: idioma.slash.replace("{user}", msg.member.nick)
            }
        })

         return comando.run(msg, args, idioma, prefix, Database)
     }
    })
}