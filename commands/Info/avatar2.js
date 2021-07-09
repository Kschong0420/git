module.exports = {
  name: 'avatar2',
  aliases: ['icon2', 'pfp2', 'profilepic2'],
  cooldown: 5,
  description: 'Return a user(s) avatar picture.',
  usage: 'avatar [username or more than 1 username]',
  category: 'Info',
  async execute (client, message, args, Discord) {
    if (!message.mentions.users.size) {
      const user = message.author
      const selfembed = new Discord.MessageEmbed()
      .setTitle(`${user.username}'s Avatar`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 4096}))
      .setURL(user.displayAvatarURL())
      message.lineReplyNoMention(selfembed)
    }

    const avatar_list = message.mentions.users.map(user => {
      return `**${user.username}'s Avatar: ** ${user.displayAvatarURL({ dynamic: true , size: 4096})}`
    })

    message.lineReplyNoMention(avatar_list)
  }
}

// if (!message.mentions.users.size) {
//    return message.lineReplyNoMention(`**Your Avatar: ** ${message.author.displayAvatarURL({ dynamic: true })}`);
// }
//
// const avatar_list = message.mentions.users.map(user => {
//    return `**${user.username}'s Avatar: ** ${user.displayAvatarURL({ dynamic: true })}`;
// });
