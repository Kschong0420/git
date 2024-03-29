const Discord = require('discord.js')
const fetch = require("node-fetch")
module.exports = {
    name: 'colour',
    aliases: ['color'],
    cooldown: 10,
    category: 'Info',
    description: 'Check a colour info.',
    usage: 'colour <hex code>',

    async execute(client, message, args) {
        let color = args[0]
        if (!color.includes("#")) return message.lineReplyNoMention('Please insert a valid colour hex code.')
        if (color.includes("#")) {
            color = args[0].split("#")[1]
        } 
        const url = (`https://api.popcatdev.repl.co/color/${color}`)
        let json
        try {
            json = await fetch(url).then(res => res.json())
        }
        catch (e) {
            return message.lineReplyNoMention('An error occured, try again later.')
        }
        if (json.error) return message.lineReplyNoMention("Invalid colour.")
        const embed = new Discord.MessageEmbed()
            .setTitle("Color Info")
            .addField('Name', json.name, true)
            .addField("Hex", json.hex, true)
            .addField("RGB", json.rgb, true)
            .addField("Brighter Shade", json.brightened, true)
            .setImage(json.color_image)
            .setColor(json.hex)
        message.lineReplyNoMention(embed)
    }
}