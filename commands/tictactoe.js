const { tictactoe } = require('reconlx')

module.exports = {
    name : 'tictactoe',
    aliases: ["ttt"],
    cooldown: 5,
    execute(client, message, args) {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}