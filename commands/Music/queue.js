const pagination = require('discord.js-pagination');
const Discord = require('discord.js')

module.exports = {
    name: "queue",
    description: "Show a list of song that queued for play by Vanilla bot.",
    aliases:['q'],
    usage: 'queue',
    category: 'Music',
    cooldown: 5,
    
    async execute(client, message, args) {
        const queue = client.distube.getQueue(message);
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
        let embed = [];
        var index = -1;
        for (let i = 0; i < queue.songs.length; i++) {
            if(i%10==0){
                index = index + 1;
                embed[index] = new Discord.MessageEmbed();
                    embed[index].setColor('RANDOM');
                    embed[index].setTitle(`:musical_note: Queue`);
                    embed[index].addField(`Music`,`${queue.songs.length}`, true);
                    embed[index].addField(`Duration`,`${queue.formattedDuration}`, true);
                    embed[index].addField(`\u200b`, `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "Queue" : "Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``);
            }
            let string = ``;
            if(!(embed[index].description === null)) string = embed[index].description;
            string += `${i === 0 ? ":star: **Now Playing:**\n" : ` \`${i}.\` `}${queue.songs[i].user} \`${queue.songs[i].formattedDuration}\` - [${queue.songs[i].name}](${queue.songs[i].url})\n\n`;
            embed[index].setDescription(string);
        }  
        
        
        
        const emojiList = ["⏪", "⏩"];
        const timeout = '120000';
        pagination(message, embed, emojiList, timeout);
    }
}