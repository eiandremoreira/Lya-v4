const { CommandStructure } = require("../../handler_comandos/index");
const { createCanvas, loadImage } = require(`canvas`);


class Bobross extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "bobross",
            category: {
                pt: "🖼️ Edição de imagem",
                en: "🖼️ Image edit"
            },
            description: {
                pt: "Faça uma imagem estilo bobross",
                en: "Make a image with bobross style"
            },
            args: {
                n: 1,
                o: 0
            }
        })
    }
    async run(message, args) {
        var user = {};
        if (message.mentions[0]) {
            const id = message.mentions[0].id;
            user = await this.client.getRESTGuildMember(message.channel.guild.id, id).avatarURL;
        } else if (args[0]) {
            user = await this.client.getRESTGuildMember(message.channel.guild.id, args[0]).avatarURL;
        } else if (await message.attachments[0]) {
            user = await message.attachments[0].url;
        } else {
            user = message.member.avatarURL;
        }

        let msg = await message.channel.createMessage({content: "<a:loading:797668749955956755>", messageReferenceID: message.id});

        const img = await loadImage(`./src/images/bobross.png`);

        const canvas = createCanvas(img.width, img.height);

        const ctx = canvas.getContext(`2d`);
        let av = await loadImage(user);
        ctx.fillStyle = `white`;
        ctx.fillRect(0, 0, img.width, img.height);
        ctx.drawImage(av, 15, 20, 440, 440);
        ctx.drawImage(img, 0, 0);


        await message.channel.createMessage(`${message.member}`, {file: canvas.toBuffer(), name: "bobross.png"});
        message.channel.deleteMessage(msg.id);
    }
}

module.exports = Bobross;
