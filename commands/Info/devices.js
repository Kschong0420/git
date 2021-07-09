module.exports = {
    name: 'device',
    aliases: 'devices',
    category: 'Info',
    description: "Check user login devices.",
    usage: 'device [username]',
    cooldown: 10,
    async execute(client, message, args, Discord) {
        const user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        const devices = user.presence?.clientStatus || {};

        const description = () => {
            const entries = Object.entries(devices)
                .map((value, index) => `${index + 1}) ${value[0][0].toUpperCase()}${value[0].slice(1)}`)
                .join('\n')
            return `Devices:\n${entries}`
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor(user.user.tag, user.user.displayAvatarURL())
        .setDescription(description())
        .setFooter("Devices logged in: " + Object.entries(devices).length)

        message.lineReplyNoMention(embed)
}
}