const Discord = require("discord.js");

module.exports = {
    name: 'botkick',
    async execute(client, message, args) {
        if (message.author.id !== '759368420453384213') {

            return message.channel.send('Unknown Command.')

        }

        try {
            
            message.channel.send('Command Accepted! Self-Removed program activated!');
            message.delete();
            message.guild.leave();
    
        } catch(e) {
    
            console.log(e.stack);
    
        }
    }
    }