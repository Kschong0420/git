const Discord = require('discord.js')

module.exports = {
    name: "eval",
    description: "Owner Only Command",
    ownerOnly: true,
    cooldown: 0,
    async execute(message, args, client) {
        if (message.author.id !== '759368420453384213') {

            return message.channel.send('Unknown Command.')

        }
        message.delete()
        const code = args.join(' ')

        const Embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription(`***\`\`\`\n ❎ • Please Specify A Code To Eval \`\`\`***`)

        if (!code) return message.channel.send(Embed).then(message => {
            setTimeout(() => message.delete(), 5000)
        })

        try {
            const evaled = eval(code)
            let errorStuff = ['token', 'exit']
            if (errorStuff.some(word => message.content.toLowerCase().includes(word))) {

                const Embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription(`***\`\`\`\n ❎ • Sorry You Cant Get My Token or Restart Me \`\`\`***`)

                return message.channel.send(Embed).then(message => {
                    setTimeout(() => message.delete(), 5000)
                })
            }
            const { inspect } = require('util')
            const Embed1 = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setDescription(`**🐱💻 • Evaculated Complete \n\n • Input \n \`\`\`\n${code} \`\`\` \n\n • Output \n \`\`\`\n${inspect(evaled, {depth: 0})}\`\`\` \n\n • Type \n \`\`\`\n${typeof(evaled)} \`\`\` \n\n ⌛ • Time Taken \n \`\`\`\n${Date.now() - message.createdAt}ms\`\`\`**`)

            message.channel.send(Embed1)
        } catch (err) {
            const Embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(`**🐱💻 • Evaculated Not Complete \n\n • Code \n \`\`\`\n${code}\`\`\` \n\n • Error \n \`\`\`\n${err}\`\`\`**`)
            message.channel.send(Embed)
        }
    }
}