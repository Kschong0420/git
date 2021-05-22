const recon = require('reconlx');
const { MessageEmbed } = require("discord.js");
const ReactionPages = recon.ReactionPages;

module.exports = {
    name: 'playlist',
    cooldown: 30,
    async execute(client, message, args, Discord) {
        const embed1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Playlist Page 1')
            .setDescription('Type v pl#<number> to play the playlist!')
            .setFooter('Type number in chat can flip the playlist to that number of page quickly!')
            .addFields(
                { name: '001', value: 'Nekopara opening song playlist' },
                { name: '002', value: 'Nekopara ending song playlist' },
                { name: '003', value: 'Japanese song playlist(Incomplete)' },
            )

        const pages = [embed1];
        const emojis = ['◀', '▶'];

        ReactionPages(message, pages, true, emojis);//if want set time can put number value in ms to set time able beside emojis
    }
}

//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' }, 
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },