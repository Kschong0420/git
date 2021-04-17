const { MessageEmbed } = require('discord.js');





module.exports = {


    name: "lockdown",


    category: "moderation",


    async execute(client, message, args) {
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('Unknown Command.');


        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');


        if (args[0] === 'on') {


            channels.forEach(channel => {


                channel.updateOverwrite(message.guild.roles.everyone, {


                    SEND_MESSAGES: false


                }).then(() => {


                    channel.setName(channel.name += `🔒`)


                })


            })


            return message.channel.send('locked all channels');


        } else if (args[0] === 'off') {


            channels.forEach(channel => {


                channel.updateOverwrite(message.guild.roles.everyone, {


                    SEND_MESSAGES: true


                }).then(() => {


                    channel.setName(channel.name.replace('🔒', ''))


                }


                )


            })


            return message.channel.send('unlocked all channels')


        }


    }


}