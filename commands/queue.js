module.exports = {
    name: "queue",
    aliases: ["q"],
    cooldown: 5,
    async execute(client, message, args, Discord) {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
        const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        
        const QueueEmbed = new Discord.MessageEmbed()
        .setTitle(`${client.emotes.queue} | **Server Queue**`)
            .setDescription(`${q}`)
        
  
      message.channel.send(QueueEmbed)
    }
}