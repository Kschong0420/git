const random = require("something-random-on-discord").Random
module.exports = {
    name: "neko",
    cooldown: 10,
    description: 'Send a neko picture.',
    usage: 'neko',
    category: 'Image',
    async execute(client, message, args) {
      
        let data = await random.getNeko()
    message.lineReplyNoMention(data)
    }
  }
  