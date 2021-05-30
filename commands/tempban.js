const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "tempban", // You Can Keep Any Name
    description: 'Temp bans A User.',  // Optional
    cooldown: 5,

    async execute(client, message, args) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.lineReplyNoMention("Unknown Command.")

        const member = message.mentions.members.first()
        if(!member) return message.reply('Please mention someone to temp ban!') //If User In Not Mentioned

        if(member.id === message.author.id) {
            return message.lineReply("You cannot temp ban yourself!")
        }

        if(member.id === client.user.id) return message.lineReplyNoMention("Unknown Command.")

        if(message.member.roles.highest.position <= member.roles.highest.position) return message.lineReply('You cannot temp ban someone that has an equal or higher role than you!')

        if(!member.bannable) return message.lineReply('I do not have permission to temp ban that user!')

        const time = args [1]
        if(!time) return message.reply('Please specify time to temp ban.') // If Time Is Not Provided

        await member.ban()

        const embed = new MessageEmbed()
        .setTitle('User Temp Banned')
        .addField('Target:', `<@${member.user.id}>`)
        .addField('Banned By:', message.author)
        .addField('Time:', `${time}`)
        .setColor('RANDOM')
        message.lineReplyNoMention(embed)

        // Unban A User After Time Is Finished
        setTimeout(async () => {
            await message.guild.members.unban(member)
            message.channel.send(`<@${member.user.id}> has been unbanned after ${time} of ban.`)
        }, ms(time))


    }
}