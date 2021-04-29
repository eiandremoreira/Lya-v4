const {CommandStructure} = require("../../handler_comandos/index");
const {get} = require("quick.db");
const LyaEmbedBuilder = require("../../complementos/EmbedBuilder/LyaEmbedBuilder");
const {removeAcents} = require("../../complementos/util");
const isPlaying = new Set();

class Akinator extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "akinator",
            aliases: ["aki"],
            description: {
                pt: "Será que o akinator descobre seu personagem?",
                en: "Does the akinator discover your character?"
            },
            category: {
                pt: "🎮 Jogos",
                en: "🎮 Games"
            }
        })
    }
    async run(message, args, idioma) {
        const lang = get(`Idioma_${message.member.id}`) || get(`Idioma_${message.channel.guild.id}`) || "pt";

        if (isPlaying.has(message.author.id)) return message.channel.createMessage(idioma.akinator.warn);

        const { Aki } = require('aki-api');

        const aki = new Aki(lang);

        await aki.start();

        isPlaying.add(message.member.id);

        var descoberto = false;
        var pergunta = false;
        var win = false;

        message.channel.createMessage(new LyaEmbedBuilder().description(`${aki.question}\n\n**${aki.answers.map(a => a).join(" | ")}**`).title(`${idioma.akinator.question} ${aki.currentStep + 1}`).thumbnail("https://www4.minijuegosgratis.com/v3/games/thumbnails/204989_7_sq.jpg").color(this.client.embedColor).create).then(async (akinator) => {
            this.client.on('messageCreate', async (msg) => {
                if (!msg.author.id === message.author.id) return;
                if (!msg.channel.id === message.channel.id) return;
                if (descoberto) return;
                if (pergunta) return;
    
                if (aki.progress >= 70 || aki.currentStep >= 78) {
                    aki.win().then(async () => {
                        descoberto = true;
                        await msg.channel.deleteMessage(msg.id);
                        akinator.edit(new LyaEmbedBuilder().image(aki.answers[0].absolute_picture_path).description(`${aki.answers[0].description}\n\n**Rank**: #${aki.answers[0].ranking}`).title(`${aki.answers[0].name}`).footer("Yes/No - Sim/Não").color(this.client.embedColor).create).then(async (akiWinner) => {
                            this.client.on("messageCreate", async winner => {
                                if (!msg.author.id === message.author.id) return;
                                if (!msg.channel.id === message.channel.id) return;   
                                if (win) return;
                                
                                if (["sim", "s", "yes", "y"].some(s => s === winner.content.toLowerCase())) {
                                    win = true;
                                    await winner.channel.deleteMessage(winner.id);
                                    isPlaying.delete(message.member.id);
                                    return akiWinner.edit(new LyaEmbedBuilder().title(idioma.akinator.winner.title).description(idioma.akinator.winner.desc).color(this.client.embedColor).create);
                                } else if (["nao", "n", "no"].some(n => n === removeAcents(winner.content.toLowerCase()))) {
                                    win = true;
                                    await msg.channel.deleteMessage(msg.id);
                                    isPlaying.delete(message.member.id);
                                    return akiWinner.edit(new LyaEmbedBuilder().title(idioma.akinator.loser.title).description(idioma.akinator.loser.desc).color(this.client.embedColor).create);
                                }
                            })
                        })
                    });
                } else {
                    var answer;
                    switch(removeAcents(msg.content.toLowerCase())) {
                        case "sim": case "s": case "y": case "yes":
                            answer = 0;
                        break;
                        case "nao": case "n": case "no":
                            answer = 1;
                        break;
                        case "nao sei": case "n s": case "ns": case "not know": case "nk":
                            answer = 2;
                        break;
                        case "provavelmente sim": case "ps": case "probably yes": case "py":
                            answer = 3;
                        break;
                        case "provavelmente nao": case "pn": case "probably not":
                            answer = 4;
                        break;
                        case "stop": case "parar":
                            answer = 5;
                        break;
                        default:
                            answer = 6;
                        break;
                    }
    
                    if (answer === 6) return;
                    if (answer === 5) {
                        descoberto = true;
                        akinator.edit(new LyaEmbedBuilder().title(idioma.akinator.end).color(this.client.embedColor).create);
                    }

                    pergunta = true;

                    await aki.step(answer).then(async () => {
                        await msg.channel.deleteMessage(msg.id);
                        akinator.edit(new LyaEmbedBuilder().description(`${aki.question}\n\n**${aki.answers.map(a => a).join(" | ")}**`).title(`${idioma.akinator.question} ${aki.currentStep + 1}`).thumbnail("https://www4.minijuegosgratis.com/v3/games/thumbnails/204989_7_sq.jpg").color(this.client.embedColor).create).then(async () => {
                            pergunta = false;                        
                        });
                    });
                }
            })
        });
    }
}

module.exports = Akinator;
