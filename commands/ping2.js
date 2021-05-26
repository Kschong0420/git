module.exports = {
    name: "ping2",
    cooldown: 5,
    async execute(client, message, args, Discord) {
        let circles = {
            green: ":green_circle:",
            yellow: ":yellow_circle:",
            red: ":red_circle:"
        }
        
        const msg = await message.lineReplyNoMention(new Discord.MessageEmbed()
        .setColor("RED") //you can change this
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .addField("Websocket", 
            `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
        ))
        
        let ping = msg.createdTimestamp - message.createdTimestamp;
        
        msg.edit(
            new Discord.MessageEmbed()
            .setColor()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .addField("Websocket", 
            `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
        )
            .addField("RoundTrip",
            `${ping <= 200 ? circles.green : ping <= 400 ? circles.yellow : circles.red} ${ping} ms `
            )
        )
    }
}

