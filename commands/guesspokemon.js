const { MessageEmbed } = require("discord.js");
const { Spawn } = require("pokecord");

module.exports = {
  name: "guesspokemon",
  aliases: ["gp", "pokemonguess"],
  cooldown: 5,
  description: "Guess the pokemon!",
  async execute(client, message, args) {

    const pokemon = await Spawn().catch(e => {});
    if (!pokemon) return message.channel.send("An error occured!");
    const filter = m => m.author.id === message.author.id;

    const embed = new MessageEmbed()
        .setAuthor("Guess The Pokémon")
        .setColor("#E15D44")
        .setImage(pokemon.imageURL);
    console.log(`${message.author.username} from ${message.guild.name} wants to guess ${pokemon.name}`)
    await message.channel.send(embed);

    message.channel.awaitMessages(filter, {
        max: 1,
        error: ["time"],
        time: 15000
    })
    .then(collected => {
        const m = collected.first();
        if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase()) return message.channel.send(`Incorrect guess! The answer was **${pokemon.name}**.`);
        return message.reply(`anwser correct!`);
    })
    .catch(() => {
        message.lineReplyNoMention(`You did not answer in time. The pokemon name is **${pokemon.name}**!`);
    });

}
};