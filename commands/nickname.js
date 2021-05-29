module.exports = {
      name: "nickname",
      aliases: ["nick"],
      description: 'Assigns a nickname to a member! Use "clear" or leave it blank to remove the nickname!',
      cooldown: 5,

  async execute(client, message, args) {
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.lineReplyNoMention("Unknown Command.")
      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase())
      if(!member) return message.lineReply('Please specify a member.')
    try {
      if (!member) return message.lineReply("`🚫` That member cannot be found on this server.");
      if (member.id === message.guild.ownerID) return message.lineReply("`🚫` You can't add nickname the guild owner.");
      if(message.member.roles.highest.position <= member.roles.highest.position) return message.lineReply('`🚫` You cannot add nickname to someone that has an equal or higher role than you!')
      //if (member.roles.highest.position >= message.member.roles.highest.position) return message.lineReply("`🚫` You can't add nickname on this user.");
      if (!member.bannable) return message.lineReply(`\`🚫\` I can't nickname **${member.user.username}**! Their role is higher than mine!`);

      const nickname = args.slice(1).join(' ')
      if (!nickname) return message.lineReply("What nickname do you want to assign?");

      return await nickname !== "clear" ? member.setNickname(nickname).then(() => message.lineReply(`\`🍇\` The nickname **${nickname}** has been assigned to **${member.user.username}**!`)) : member.setNickname("").then(() => message.lineReply(`\`🍇\` **${member.displayName}**'s nickname has been cleared!`));
    } catch (e) {
      return console.log(e)
    }
  }
}

