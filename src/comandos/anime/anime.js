const {CommandStructure} = require("../../handler_comandos/index");
const LyaEmbedBuilder = require("../../complementos/EmbedBuilder/LyaEmbedBuilder");
const {get} = require("quick.db");

class Anime extends CommandStructure {
    constructor(client) {
        super(client, {
            name: "anime",
            aliases: ["ani", "aniinfo", "animeinfo"],
            description: {
                pt: "Veja as informações de um anime",
                en: "See an anime information"
            },
            category: {
                pt: "<:anime_glas:834918144761528320> Anime",
                en: "<:anime_glas:834918144761528320> Anime"
            },
            args: {
                o: 1,
                c: 1
            }
        })
    }
    async run(message, args, idioma) {
        try {
            
            const fetch = require("node-fetch")
            let body = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`)
            body = await body.json()

            const lang = get(`Idioma_${message.member.id}`) || get(`Idioma_${message.channel.guild.id}`) || "pt";

            const res = await fetch("https://libretranslate.com/translate", {
                method: "POST",
                body: JSON.stringify({
                    q: body.data[0].attributes.synopsis || "No description",
                    source: "en",
                    target: lang
                }),
                headers: { "Content-Type": "application/json" }
            });

            let timeCreated = "";
            let data1 = body.data[0].attributes.startDate;
            timeCreated = data1 || idioma.anime.errs[0]

            let timeEnded = "";
            let data2 = body.data[0].attributes.endtDate;
            timeEnded = data2 || idioma.anime.errs[0];

            let eps = body.data[0].attributes.episodeLength + " minutos cada";
            if (eps.includes("undefined")) {
                eps = idioma.anime.errs[2];
            }


            let descricao = await res.json();

            let embed = new LyaEmbedBuilder()
            .color(this.client.embedColor)
            .author(body.data[0].attributes.canonicalTitle, "https://i.pinimg.com/564x/12/dc/78/12dc784f45e8502c823a44dd4338c529.jpg", `https://kitsu.io/anime/${body.data[0].attributes.slug}`)
            .description(`**${descricao.translatedText}**`)
            .thumbnail(body.data[0].attributes.posterImage.large)
            .field(idioma.anime.fields[0], body.data[0].attributes.averageRating, true)
            .field(idioma.anime.fields[1], "#" + body.data[0].attributes.ratingRank, true)
            .field(idioma.anime.fields[2], "#" + body.data[0].attributes.popularityRank, true)
            .field(idioma.anime.fields[3], body.data[0].attributes.favoritesCount || idioma.anime.errs[3], true)
            .field(idioma.anime.fields[4], body.data[0].attributes.status.replace("current" , idioma.anime.texts[0]).replace("finished" ,idioma.anime.texts[1]).replace("unreleased" , idioma.anime.texts[2]).replace("upcoming" , idioma.anime.texts[3]) || idioma.anime.texts[4], true)
            .field(idioma.anime.fields[5], body.data[0].attributes.showType, true)
            .field(idioma.anime.fields[6], body.data[0].attributes.episodeCount || idioma.anime.errs[1], true)
            .field(idioma.anime.fields[7], eps, true)
            .field(idioma.anime.fields[8], timeCreated || data1, true)
            .field(idioma.anime.fields[9], timeEnded || data2, true)
            .field(idioma.anime.fields[10], body.data[0].attributes.ageRating.replace("PG" , idioma.anime.restrict[0]).replace("G" , idioma.anime.restrict[1]).replace("R18", idioma.anime.restrict[2]).replace("R", idioma.anime.restrict[3]), true)
            message.channel.createMessage(embed.create)
        } catch (e) {
            console.log(e)
            message.addReaction("❌")
        }
    }
}

module.exports = Anime;