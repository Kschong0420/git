const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: "tweet",
    description: "tweet something on twitter!",
    async execute(client, message, args) {

        let user = await message.mentions.members.first()
        let text = args.join(" ");

        if(user){
            text = args.slice(1).join(" ");
        } else {
            text = args.slice(" ")
            user = message.member;
        }

        if(!text){
            return message.channel.send("Please enter a text!");
        }

        try {
        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user.user.username}&text=${text}`)
            .then((res) => res.json())
            .then((data) => {
                let embed = new MessageEmbed()
                    .setTitle("A new tweet has been published!!")
                    .setImage(data.message)
                    .setTimestamp()
                message.channel.send(embed)
            })

        } catch(err) {
            return message.channel.send('An error occured.')
        }
    }
}