const reactionCollector = (msg, emoji, user, time, once) => {
    const timer = new Set();
    var reacted;

    if (!msg) throw new Error("Você não definiu a mensagem!");
    if (!emoji) throw new Error("Você não definiu o emoji!");
    if (!user) throw new Error("Você não definiu o usuário da reação!");
    if (!time) time = 15000;

    timer.add(`Timer_Collector_${msg.id}`);
    setTimeout(() => {
        reacted = true;
        timer.delete(`Timer_Collector_${msg.id}`);
    }, time);

    this.client.on('messageReactionAdd', async (m, e, u) => {
        if (reacted === true) return;
        if (u.id === user.id) {
            if (m.id === msg.id) {
                if (e.name === emoji) {
                    if (conta === 0) return message.channel.createMessage("Cade a combinação?\nSó de raiva vou pegar 10,000 de você :rage:")
                    message.channel.createMessage(`✅ Você ganhou ${conta}`);
                } 
            }
        }
    })
}