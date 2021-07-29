const axios = require("axios");

module.exports = {
    name: 'banner',
    description: 'Check an user banner or banner colour',
    cooldown: 5,
    usage: 'banner <user>',
    category: 'Info',
    async execute(client, message, args, Discord) {
        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        if (!user) return message.lineReplyNoMention('Please specify a user.')

        axios
            .get(`https://discord.com/api/users/${user.id}`, {
                headers: {
                    Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
                }
            })
            .then((res) => {
                const { banner, accent_color } = res.data;
                if (banner) {
                    const extension = banner.startsWith("a_") ? ".gif" : ".png"
                    const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=1024`

                    const embed = new Discord.MessageEmbed()
                        .setTitle(`${user.user.tag}'s banner`)
                        .setImage(url)
                        .setDescription(`[Banner Link](${url})`)
                        .setTimestamp()
                        .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))

                    message.lineReplyNoMention(embed)

                } else {
                    if (accent_color) {
                        const embed = new Discord.MessageEmbed()
                            .setColor(accent_color)
                            .setDescription(`${user.user.tag} doesn't have a banner but they do have a accent colour.`)
                            .setTimestamp()
                            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))

                        message.lineReplyNoMention(embed)
                    }
                    else
                        return message.lineReplyNoMention(
                            `**${user.user.tag}** does not have a banner nor an accent colour.`
                        )
                }
            })

    }
}