const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: '',//not perfect p = problem
    async execute(cilent, message, args, Discord) {
        if (!message.channel.nsfw) { message.channel.send("This command can only be used in channels marked nsfw."); return; }

        const type = args.join(' ')
        if (!type) return message.channel.send('Please specify a type of nsfw picture you want')

        try {
            if (type === 'ahegao') {
                const embed = new Discord.MessageEmbed()
                    .setImage(hmtai.nsfw.ahegao())
                message.channel.send(embed)
            }

            if (type === 'ass') {
                const embed = new Discord.MessageEmbed()

                    .setImage(hmtai.nsfw.ass())
                message.channel.send(embed)
            }

            if (type === 'incest') {
                const embed = new Discord.MessageEmbed()
                    .setImage(hmtai.nsfw.incest())
                message.channel.send(embed)
            }

            if (type === 'manga') {
                const embed = new Discord.MessageEmbed()
                    .setImage(hmtai.nsfw.manga())
                message.channel.send(embed)
            }

            if (type === 'maw') {
                const embed = new Discord.MessageEmbed()
                    .setImage(hmtai.nsfw.nsfwMobileWallpaper())
                message.channel.send(embed)
            }

            if (type === 'neko') {
                const embed = new Discord.MessageEmbed()
                    .setImage(hmtai.nsfw.neko())
                message.channel.send(embed)
            }

            if (type === 'public') {
                const embed = new Discord.MessageEmbed()
                    .setImage(hmtai.nsfw.public())
                message.channel.send(embed)
            }

            if (type === 'thighs') {
                const embed = new Discord.MessageEmbed()
                    .setImage(hmtai.nsfw.thighs())
                message.channel.send(embed)
            }

            if (type === 'uniform') {
                const embed = new Discord.MessageEmbed()
                    .setImage(hmtai.nsfw.uniform())
                message.channel.send(embed)
            }

            if (type === 'yuri') {
                const embed = new Discord.MessageEmbed()
                    .setImage(hmtai.nsfw.yuri())
                message.channel.send(embed)
            }
        } catch (e) {
            message.channel.send('The type of nsfw picture is not support.')
        }
    } 
}
