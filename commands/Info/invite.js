const Discord = require('discord.js');

module.exports = {
        name: "invite",
        aliases: ['invites', 'invitations', 'inv', 'invinfo', 'inviteinfo', 'ii'],
        cooldown: 20,
        description: 'Check how many people you invite to the server and send all the invite code you create.',
        usage: 'invite [username]',
        category: 'Info',
    async execute(client, message, args) {
        try {
            let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

            let invites = await message.guild.fetchInvites()

            let memberInvites = invites.filter(i => i.inviter && i.inviter.id === member.user.id);

            if (memberInvites.size <= 0) {
                return message.lineReplyNoMention(`${member.displayName} didn't invite anyone to the server!`, (member === message.member ? null : member));
  {}          }

            let content = memberInvites.map(i => i.code).join("\n");
            let index = 0;
            memberInvites.forEach(invite => index += invite.uses);

            let embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setFooter(message.guild.name, message.guild.iconURL())
                .setAuthor(`Invite Tracker for ${message.guild.name}`)
                .setDescription(`Information on Invites of ${member.displayName}`)
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .addField("No. Invited Persons", index)
                .addField("Invitation Codes\n\n", content);
            message.lineReplyNoMention(embed);
        } catch (e) {
            return message.lineReplyNoMention(e.message)
        }
    }
};