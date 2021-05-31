const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: "tweet",
    description: "tweet something on twitter!",
    cooldown: 10,
    async execute(client, message, args) {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author 

        if(user){
            text = args.slice(1).join(" ");
        } else {
            text = args.slice(" ")
            user = message.member;
        }

        if(!text){
            return message.lineReply("Please enter a text!");
        }

        try {
        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user.user.username}&text=${text}`)
            .then((res) => res.json())
            .then((data) => {
                let embed = new MessageEmbed()
                    .setTitle("A new tweet has been published!!")
                    .setImage(data.message)
                    .setTimestamp()
                message.lineReplyNoMention(embed)
            })

        } catch(err) {
            return message.lineReplyNoMention('An error occured.')
        }
    }
}