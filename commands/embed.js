const discord = require("discord.js");

module.exports = {
  name: 'embed',
  cooldown: 30,

  async execute(client, message, args) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention("Unknown Command.")

    let questions = {
        firstQuestion: "What do you want to be the embed's title? Type the title into the chat now!",
        secondQuestion: "Type the description that you want in the embed!",
        thirdQuestion: "Type the color you want to be on the embed! It can be a color like red or a hex code.",
        fourthQuestion: "What do you want its footer to be?",
    }
        message.lineReplyNoMention('This will continue in DMs.')
        message.author.send(questions.firstQuestion).then(msg => {
            const filter1 = m => m.author.id === message.author.id
            msg.channel.awaitMessages(filter1, {
                time: 5 * 60000,
                max: 1
            }).then(messages => {
                let msg1 = messages.first().content
                if(msg1.toLowerCase() === "cancel") return message.author.send("Process cancelled.")
                message.author.send(questions.secondQuestion).then(msg => {
                    const filter1 = m => m.author.id === message.author.id
                    msg.channel.awaitMessages(filter1, {
                        time: 5 * 60000,
                        max: 1
                    }).then(messages => {
                        let msg2 = messages.first().content
                        if(msg2.toLowerCase() === "cancel") return message.author.send("Process cancelled.")
                        message.author.send(questions.thirdQuestion).then(msg => {
                            const filter1 = m => m.author.id === message.author.id
                            msg.channel.awaitMessages(filter1, {
                                time: 5 * 60000,
                                max: 1
                            }).then(messages => {
                                let msg3 = messages.first().content.toUpperCase()
                                if(msg3.toLowerCase() === "cancel") return message.author.send("Process cancelled.")
                                message.author.send(questions.fourthQuestion).then(msg => {
                                    const filter1 = m => m.author.id === message.author.id
                                    msg.channel.awaitMessages(filter1, {
                                        time: 5 * 60000,
                                        max: 1
                                    }).then(messages => {
                                        let msg4 = messages.first().content
                                        if(msg4.toLowerCase() === "cancel") return message.author.send("Process cancelled.")
                                        message.author.send("Embed created.")
                                            
                                                    message.lineReplyNoMention(
                                                        new discord.MessageEmbed()
                                                            .setTitle(msg1)
                                                            .setDescription(msg2)
                                                            .setColor(msg3)
                                                            .setFooter(msg4)
                                                    )
                                            
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            
     

     
  }
}