const Discord = require("discord.js");
const Jikan = require("jikan-node");
const mal = new Jikan();

function createDescription(characters) {
    let c = "";
    for (i = 0; i < characters.length && i < 10; i++) {
        let character = characters[i];
        let name = character.name;
        let anime = character.anime;
        let manga = character.manga;
        let animeName = "";
        let mangaName = "";
        if (typeof anime !== "undefined" && anime.length > 0) {
            animeName = anime[0].name;
            c += `${i + 1}: **${name}** \n ${animeName} \n \n`;
        } else if (typeof manga !== "undefined" && manga.length > 0) {
            mangaName = manga[0].name;
            c += `${i + 1}: **${name}** \n ${mangaName} \n \n`;
        }
    }
    return c;
}

module.exports = {
    name: "character",
    category: "Info",
    description: "Search for anime character",
    usage: "character <Anime Character Name>",
    aliases: ['an', 'ac', 'animecharacter'],
    cooldown: 5,
    async execute(client, message, args, Discord) {

        user = message.author
        characterName = args;
        mal
            .search("character", characterName, 1)
            .then(result => {
                characters = result.results;
                let filterNumber = [];
                for (i = 0; i < characters.length && i < 10; i++) {
                    filterNumber += i.toString();
                    //console.log(filterNumber);
                }
                for (i = 0; i < characters.length; i++) {
                    characters[i].anime.sort((a, b) =>
                        a.mal_id > b.mal_id ? 1 : b.mal_id > a.mal_id ? -1 : 0
                    );
                }
                const embedSelection = new Discord.MessageEmbed()
                    .setTitle("Results")
                    .setColor("#7EB9FF")
                    .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(createDescription(characters))
                    .setTimestamp();
                 //message.lineReplyNoMention(, embedSelection);
                message.lineReplyNoMention(
                        "Please write a number to choose an anime character according to the anime.",
                        embedSelection
                    )
                    .then(msg => {
                        let i;
                        message.channel
                            .awaitMessages(
                                response => {
                                    for (i = 0; i < filterNumber.length; i++) {
                                        if (response.content === filterNumber[i]) {
                                            response.delete();
                                            return true;
                                        }
                                    }
                                },
                                {
                                    max: 1,
                                    time: 10000,
                                    errors: ["time"]
                                }
                            )
                            .then(collected => {
                                mal.findCharacter(characters[i - 1].mal_id, "").then(result => {
                                    character = result;
                                    //console.log(character.voice_actors);
                                    const embedCharacter = new Discord.MessageEmbed()
                                        .setColor("#7EB9FF")
                                        .setTitle(character.name ? character.name : "")
                                        .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
                                        .setColor("BLUE")
                                        .setImage(character.image_url)
                                        .setDescription(
                                            character.nicknames[0] ? character.nicknames[0] : ""
                                        )
                                        .addField("MAL Link", character.url)
                                        .addField(
                                            "Anime",
                                            character.animeography[0]
                                                .name /*+ "\n"
                    character.animeography[0].url,*/
                                        )
                                        .addField("Voice actor", character.voice_actors[0].name)
                                        .setURL(character.animeography[0].url)
                                    .setTimestamp();
                                    message.lineReplyNoMention(embedCharacter);
                                    msg.delete();
                                });
                            })
                            .catch(collected => {
                                message.lineReplyNoMention("Looks like you didn't answer in time.");
                                msg.delete();
                            });
                    });
            })
            .catch(response => {
                //console.log(response);
                message.lineReplyNoMention(
                    `Anime character: ${characterName} not found.`
                );
            });
    }
}