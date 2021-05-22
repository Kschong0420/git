module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp', 'profilepic'],
  cooldown: 5,
  description: 'Return a user(s) avatar picture!',
  // Use your own execute parameters
  execute (client, message, args, Discord) {
    if (!message.mentions.users.size) {
      const user = message.author
      const selfembed = new Discord.MessageEmbed()
      .setTitle(`${user.username}'s Avatar`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 4096}))
      .setURL(user.displayAvatarURL())
      message.channel.send(selfembed)
    }

    const avatar_list = message.mentions.users.map(user => {
      return `**${user.username}'s Avatar: ** ${user.displayAvatarURL({ dynamic: true , size: 4096})}`
    })

    message.channel.send(avatar_list)
  }
}

// if (!message.mentions.users.size) {
//    return message.channel.send(`**Your Avatar: ** ${message.author.displayAvatarURL({ dynamic: true })}`);
// }
//
// const avatar_list = message.mentions.users.map(user => {
//    return `**${user.username}'s Avatar: ** ${user.displayAvatarURL({ dynamic: true })}`;
// });
