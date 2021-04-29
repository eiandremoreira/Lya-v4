const { CommandStructure } = require("../../handler_comandos/index");

const timer = new Set();

class Raspadinha extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "raspadinha",
            aliases: ["telecena", "scratch_card"],
            description: {
                pt: "Ganhe ou perca dinheiro",
                en: "Win or lose money"
            },
            cooldown: 10000,
            category: {
                pt: "💸 Economia",
                en: "💸 Economy"
            }
        })
    }
    async run(message, args, idioma, prefix, db) {
        var rev = false;
        var reload = false;
        let money = db.get(`Money.${message.member.id}`) ? db.get(`Money.${message.member.id}`) : 0;

        if (money < 2500) return message.channel.createMessage({
            "embed": {
                "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790,
                "description": idioma.raspadinha.err.err1
            }
        });
        
        if (money >= 2500) db.remove(`Money.${message.member.id}`, 2500);

        let emojis = ["<:PES_Angery:833871352242634782>", "<a:CalcinhaCa:833870472344109058>", "<:marcos:826221016236687490>", "<:aqua_ok:833516112884662272>", "<:LoliPolici:833871080254210058>"];

        let emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
        let emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
        let emoji3 = emojis[Math.floor(Math.random() * emojis.length)];
        let emoji4 = emojis[Math.floor(Math.random() * emojis.length)];
        let emoji5 = emojis[Math.floor(Math.random() * emojis.length)];
        let emoji6 = emojis[Math.floor(Math.random() * emojis.length)];
        let emoji7 = emojis[Math.floor(Math.random() * emojis.length)];
        let emoji8 = emojis[Math.floor(Math.random() * emojis.length)];
        let emoji9 = emojis[Math.floor(Math.random() * emojis.length)];

        let msg = await message.channel.createMessage({"embed": {"color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790, "description": idioma.raspadinha.desc1, "fields": [{"name": idioma.raspadinha.desc2, "value": "||"+emoji1+"||"+"||"+emoji2+"||"+"||"+emoji3+"||"+"\n"+"||"+emoji4+"||"+"||"+emoji5+"||"+"||"+emoji6+"||"+"\n"+"||"+emoji7+"||"+"||"+emoji8+"||"+"||"+emoji9+"||", "inline": true}, {"name": "Valores", "value": "<:PES_Angery:833871352242634782> -> 1,000 💴\n<:marcos:826221016236687490> -> 5,000 💴\n<:LoliPolici:833871080254210058> -> 6,000 💴\n<:aqua_ok:833516112884662272> -> 25,000 💴\n<a:CalcinhaCa:833870472344109058> -> 50,000 💴", "inline": true}]}})

        let ms = await message.channel.createMessage({"embed": {"color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790, "description": idioma.raspadinha.msg1}})
        var value = {};

        value.n1 = 0;
        value.n2 = 0;
        value.n3 = 0;
        value.n4 = 0;
        value.n5 = 0;

        if (emoji1 === emoji2) {
            if (emoji2 === emoji3) {
                let emoji = emoji1;
                if (emoji === emojis[0]) {
                    value.n1 = 1000;
                } else if (emoji === emojis[1]) {
                    value.n2 = 50000;
                } else if (emoji === emojis[2]) {
                    value.n3 = 5000;
                } else if (emoji === emojis[3]) {
                    value.n4 = 25000;
                } else if (emoji === emojis[4]) {
                    value.n5 = 6000;
                }
            }
        } 
        if (emoji4 === emoji5) {
            if (emoji5 === emoji6) {
                let emoji = emoji4;
                if (emoji === emojis[0]) {
                    value.n1 = 1000;
                } else if (emoji === emojis[1]) {
                    value.n2 = 50000;
                } else if (emoji === emojis[2]) {
                    value.n3 = 5000;
                } else if (emoji === emojis[3]) {
                    value.n4 = 25000;
                } else if (emoji === emojis[4]) {
                    value.n5 = 6000;
                }
            }
        } 
        if (emoji7 === emoji8) {
            if (emoji8 === emoji9) {
                let emoji = emoji7;
                if (emoji === emojis[0]) {
                    value.n1 = 1000;
                } else if (emoji === emojis[1]) {
                    value.n2 = 50000;
                } else if (emoji === emojis[2]) {
                    value.n3 = 5000;
                } else if (emoji === emojis[3]) {
                    value.n4 = 25000;
                } else if (emoji === emojis[4]) {
                    value.n5 = 6000;
                }
            }
        } 
        if (emoji1 === emoji4) {
            if (emoji4 === emoji7) {
                let emoji = emoji1;
                if (emoji === emojis[0]) {
                    value.n1 = 1000;
                } else if (emoji === emojis[1]) {
                    value.n2 = 50000;
                } else if (emoji === emojis[2]) {
                    value.n3 = 5000;
                } else if (emoji === emojis[3]) {
                    value.n4 = 25000;
                } else if (emoji === emojis[4]) {
                    value.n5 = 6000;
                }
            }
        } 
        if (emoji2 === emoji5) {
            if (emoji5 === emoji8) {
                let emoji = emoji2;
                if (emoji === emojis[0]) {
                    value.n1 = 1000;
                } else if (emoji === emojis[1]) {
                    value.n2 = 50000;
                } else if (emoji === emojis[2]) {
                    value.n3 = 5000;
                } else if (emoji === emojis[3]) {
                    value.n4 = 25000;
                } else if (emoji === emojis[4]) {
                    value.n5 = 6000;
                }
            }
        } 
        if (emoji3 === emoji6) {
            if (emoji6 === emoji9) {
                let emoji = emoji3;
                if (emoji === emojis[0]) {
                    value.n1 = 1000;
                } else if (emoji === emojis[1]) {
                    value.n2 = 50000;
                } else if (emoji === emojis[2]) {
                    value.n3 = 5000;
                } else if (emoji === emojis[3]) {
                    value.n4 = 25000;
                } else if (emoji === emojis[4]) {
                    value.n5 = 6000;
                }
            }
        }
        if (emoji1 === emoji5) {
            if (emoji5 === emoji9) {
                let emoji = emoji1;
                if (emoji === emojis[0]) {
                    value.n1 = 1000;
                } else if (emoji === emojis[1]) {
                    value.n2 = 50000;
                } else if (emoji === emojis[2]) {
                    value.n3 = 5000;
                } else if (emoji === emojis[3]) {
                    value.n4 = 25000;
                } else if (emoji === emojis[4]) {
                    value.n5 = 6000;
                }
            }
        }
        if (emoji3 === emoji5) {
            if (emoji5 === emoji7) {
                let emoji = emoji3;
                if (emoji === emojis[0]) {
                    value.n1 = 1000;
                } else if (emoji === emojis[1]) {
                    value.n2 = 50000;
                } else if (emoji === emojis[2]) {
                    value.n3 = 5000;
                } else if (emoji === emojis[3]) {
                    value.n4 = 25000;
                } else if (emoji === emojis[4]) {
                    value.n5 = 6000;
                }
            }
        }
        if (emoji7 === emoji5) {
            if (emoji5 === emoji3) {
                let emoji = emoji7;
                if (emoji === emojis[0]) {
                    value.n1 = 1000;
                } else if (emoji === emojis[1]) {
                    value.n2 = 50000;
                } else if (emoji === emojis[2]) {
                    value.n3 = 5000;
                } else if (emoji === emojis[3]) {
                    value.n4 = 25000;
                } else if (emoji === emojis[4]) {
                    value.n5 = 6000;
                }
            }
        }
        if (emoji9 === emoji5) {
            if (emoji5 === emoji1) {
                let emoji = emoji9;
                if (emoji === emojis[0]) {
                    value.n1 = 1000;
                } else if (emoji === emojis[1]) {
                    value.n2 = 50000;
                } else if (emoji === emojis[2]) {
                    value.n3 = 5000;
                } else if (emoji === emojis[3]) {
                    value.n4 = 25000;
                } else if (emoji === emojis[4]) {
                    value.n5 = 6000;
                }
            }
        }

            let conta = value.n1 + value.n2 + value.n3 + value.n4 + value.n5;
            await ms.addReaction("✅");
            await ms.addReaction("🔁");

            const user = message.author;
            var reacted; 
            timer.add(`Timer_Collector_${msg.id}`);
            setTimeout(() => {
                reacted = true;
                timer.delete(`Timer_Collector_${msg.id}`);
            }, 160000);

            this.client.on('messageReactionAdd', async (m, e, u) => {
                if (u.id === user.id) {
                    if (m.id === ms.id) {
                        if (e.name === "🔁") {
                            reload = true;
                            let money1 = db.get(`Money.${message.member.id}`) ? db.get(`Money.${message.member.id}`) : 0;

                            if (money1 < 2500) return message.channel.createMessage({
                                "embed": {
                                    "color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790,
                                    "description": idioma.raspadinha.err.err1
                                }
                            });

                            if (money1 >= 2500) db.remove(`Money.${message.member.id}`, 2500);

                            let emojis = ["<:PES_Angery:833871352242634782>", "<a:CalcinhaCa:833870472344109058>", "<:marcos:826221016236687490>", "<:aqua_ok:833516112884662272>", "<:LoliPolici:833871080254210058>"];

                            let emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
                            let emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
                            let emoji3 = emojis[Math.floor(Math.random() * emojis.length)];
                            let emoji4 = emojis[Math.floor(Math.random() * emojis.length)];
                            let emoji5 = emojis[Math.floor(Math.random() * emojis.length)];
                            let emoji6 = emojis[Math.floor(Math.random() * emojis.length)];
                            let emoji7 = emojis[Math.floor(Math.random() * emojis.length)];
                            let emoji8 = emojis[Math.floor(Math.random() * emojis.length)];
                            let emoji9 = emojis[Math.floor(Math.random() * emojis.length)];
                    
                            await msg.edit({"embed": {"color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790, "description": idioma.raspadinha.desc1, "fields": [{"name": idioma.raspadinha.desc2, "value": "||"+emoji1+"||"+"||"+emoji2+"||"+"||"+emoji3+"||"+"\n"+"||"+emoji4+"||"+"||"+emoji5+"||"+"||"+emoji6+"||"+"\n"+"||"+emoji7+"||"+"||"+emoji8+"||"+"||"+emoji9+"||", "inline": true}, {"name": "Valores", "value": "<:PES_Angery:833871352242634782> -> 1,000 💴\n<:marcos:826221016236687490> -> 5,000 💴\n<:LoliPolici:833871080254210058> -> 6,000 💴\n<:aqua_ok:833516112884662272> -> 25,000 💴\n<a:CalcinhaCa:833870472344109058> -> 50,000 💴", "inline": true}]}})
                    
                            var value = {};
                    
                            value.n1 = 0;
                            value.n2 = 0;
                            value.n3 = 0;
                            value.n4 = 0;
                            value.n5 = 0;
                    
                            if (emoji1 === emoji2) {
                                if (emoji2 === emoji3) {
                                    let emoji = emoji1;
                                    if (emoji === emojis[0]) {
                                        value.n1 = 1000;
                                    } else if (emoji === emojis[1]) {
                                        value.n2 = 50000;
                                    } else if (emoji === emojis[2]) {
                                        value.n3 = 5000;
                                    } else if (emoji === emojis[3]) {
                                        value.n4 = 25000;
                                    } else if (emoji === emojis[4]) {
                                        value.n5 = 6000;
                                    }
                                }
                            } 
                            if (emoji4 === emoji5) {
                                if (emoji5 === emoji6) {
                                    let emoji = emoji4;
                                    if (emoji === emojis[0]) {
                                        value.n1 = 1000;
                                    } else if (emoji === emojis[1]) {
                                        value.n2 = 50000;
                                    } else if (emoji === emojis[2]) {
                                        value.n3 = 5000;
                                    } else if (emoji === emojis[3]) {
                                        value.n4 = 25000;
                                    } else if (emoji === emojis[4]) {
                                        value.n5 = 6000;
                                    }
                                }
                            } 
                            if (emoji7 === emoji8) {
                                if (emoji8 === emoji9) {
                                    let emoji = emoji7;
                                    if (emoji === emojis[0]) {
                                        value.n1 = 1000;
                                    } else if (emoji === emojis[1]) {
                                        value.n2 = 50000;
                                    } else if (emoji === emojis[2]) {
                                        value.n3 = 5000;
                                    } else if (emoji === emojis[3]) {
                                        value.n4 = 25000;
                                    } else if (emoji === emojis[4]) {
                                        value.n5 = 6000;
                                    }
                                }
                            } 
                            if (emoji1 === emoji4) {
                                if (emoji4 === emoji7) {
                                    let emoji = emoji1;
                                    if (emoji === emojis[0]) {
                                        value.n1 = 1000;
                                    } else if (emoji === emojis[1]) {
                                        value.n2 = 50000;
                                    } else if (emoji === emojis[2]) {
                                        value.n3 = 5000;
                                    } else if (emoji === emojis[3]) {
                                        value.n4 = 25000;
                                    } else if (emoji === emojis[4]) {
                                        value.n5 = 6000;
                                    }
                                }
                            } 
                            if (emoji2 === emoji5) {
                                if (emoji5 === emoji8) {
                                    let emoji = emoji2;
                                    if (emoji === emojis[0]) {
                                        value.n1 = 1000;
                                    } else if (emoji === emojis[1]) {
                                        value.n2 = 50000;
                                    } else if (emoji === emojis[2]) {
                                        value.n3 = 5000;
                                    } else if (emoji === emojis[3]) {
                                        value.n4 = 25000;
                                    } else if (emoji === emojis[4]) {
                                        value.n5 = 6000;
                                    }
                                }
                            } 
                            if (emoji3 === emoji6) {
                                if (emoji6 === emoji9) {
                                    let emoji = emoji3;
                                    if (emoji === emojis[0]) {
                                        value.n1 = 1000;
                                    } else if (emoji === emojis[1]) {
                                        value.n2 = 50000;
                                    } else if (emoji === emojis[2]) {
                                        value.n3 = 5000;
                                    } else if (emoji === emojis[3]) {
                                        value.n4 = 25000;
                                    } else if (emoji === emojis[4]) {
                                        value.n5 = 6000;
                                    }
                                }
                            }
                            if (emoji1 === emoji5) {
                                if (emoji5 === emoji9) {
                                    let emoji = emoji1;
                                    if (emoji === emojis[0]) {
                                        value.n1 = 1000;
                                    } else if (emoji === emojis[1]) {
                                        value.n2 = 50000;
                                    } else if (emoji === emojis[2]) {
                                        value.n3 = 5000;
                                    } else if (emoji === emojis[3]) {
                                        value.n4 = 25000;
                                    } else if (emoji === emojis[4]) {
                                        value.n5 = 6000;
                                    }
                                }
                            }
                            if (emoji3 === emoji5) {
                                if (emoji5 === emoji7) {
                                    let emoji = emoji3;
                                    if (emoji === emojis[0]) {
                                        value.n1 = 1000;
                                    } else if (emoji === emojis[1]) {
                                        value.n2 = 50000;
                                    } else if (emoji === emojis[2]) {
                                        value.n3 = 5000;
                                    } else if (emoji === emojis[3]) {
                                        value.n4 = 25000;
                                    } else if (emoji === emojis[4]) {
                                        value.n5 = 6000;
                                    }
                                }
                            }
                            if (emoji7 === emoji5) {
                                if (emoji5 === emoji3) {
                                    let emoji = emoji7;
                                    if (emoji === emojis[0]) {
                                        value.n1 = 1000;
                                    } else if (emoji === emojis[1]) {
                                        value.n2 = 50000;
                                    } else if (emoji === emojis[2]) {
                                        value.n3 = 5000;
                                    } else if (emoji === emojis[3]) {
                                        value.n4 = 25000;
                                    } else if (emoji === emojis[4]) {
                                        value.n5 = 6000;
                                    }
                                }
                            }
                            if (emoji9 === emoji5) {
                                if (emoji5 === emoji1) {
                                    let emoji = emoji9;
                                    if (emoji === emojis[0]) {
                                        value.n1 = 1000;
                                    } else if (emoji === emojis[1]) {
                                        value.n2 = 50000;
                                    } else if (emoji === emojis[2]) {
                                        value.n3 = 5000;
                                    } else if (emoji === emojis[3]) {
                                        value.n4 = 25000;
                                    } else if (emoji === emojis[4]) {
                                        value.n5 = 6000;
                                    }
                                }
                            }
                    
                                var conta5 = await value.n1 + value.n2 + value.n3 + value.n4 + value.n5;
                    
                                const user = message.author;
                                var reacted = false; 
                                timer.add(`Timer_Collector_${msg.id}`);
                                setTimeout(() => {
                                    reacted = true;
                                    timer.delete(`Timer_Collector_${msg.id}`);
                                }, 160000);

                                this.client.once('messageReactionAdd', async (m, e, u) => {

                                    if (reacted === true) return;
                                    if (u.id === user.id) {
                                        if (m.id === ms.id) {
                                            if (e.name === "✅") {
                                                reacted = true;
                                                if (conta5 === "0" || conta5 === 0) {
                                                    await db.remove(`Money.${message.member.id}`, 10000);
                                                    return ms.edit({"embed": {"color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790, "description": idioma.raspadinha.txt1}})
                                                } else {
                                                    await db.add(`Money.${message.member.id}`, conta5);
                                                    ms.edit({"embed": {"color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790, "description": idioma.raspadinha.txt2.replace("{user}", message.member).replace("{conta}", await conta5.toLocaleString())}});
                                                }
                                            } 
                                        }
                                    }
                                })
                        }
                    }
                }
            })

            this.client.once('messageReactionAdd', async (m, e, u) => {
                if (reload === true) return; 
                if (reacted === true) return;
                if (u.id === user.id) {
                    if (m.id === ms.id) {
                        if (e.name === "✅") {
                            reacted = true;
                            if (conta === 0 || conta === "0") {
                                await db.remove(`Money.${message.member.id}`, 10000);
                                return ms.edit({"embed": {"color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790, "description": idioma.raspadinha.txt1}})
                            } else {
                                await db.add(`Money.${message.member.id}`, conta);
                                ms.edit({"embed": {"color": db.get(`Embeds.colors.${message.channel.guild.id}`) ? db.get(`Embeds.colors.${message.channel.guild.id}`) : 3092790, "description": idioma.raspadinha.txt2.replace("{user}", message.member).replace("{conta}", await conta.toLocaleString())}});
                            }
                        } 
                    }
                }
            })
    } 
}

module.exports = Raspadinha;