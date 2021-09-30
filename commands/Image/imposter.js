const discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  name: "imposter",
  description: "Eject sus player from the spaceship.",
  usage: "imposter [username]",
  aliases: ['sus'],
  cooldown: 7,
  category: 'Image',
  async execute (client, message, args) {
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member
    const imp = [true, false];
    const imposter = imp[Math.floor(Math.random() * imp.length)];
    const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"]
    const crewmate = crew[Math.floor(Math.random() * crew.length)];
    
    if(!user) {
      return message.lineReplyNoMention(`${message.author} Please specify a user to eject by mentioning them!`)
    }
    
    const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.user.username}&impostor=${imposter}&crewmate=${crewmate}`)
    
    const embed = new discord.MessageEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
      .setTitle(`${message.author.username} decided to eject ${user.user.username}!`)
      .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
      .setColor("BLUE")
      .setDescription(`[Click here, if the image didn't load!](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.lineReplyNoMention(embed);
  }
}