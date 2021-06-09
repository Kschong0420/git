const random = require("something-random-on-discord").Random
module.exports = {
    name: "meme",
    cooldown: 5,
    description: 'Send a meme to a channel',
    usage: 'meme',
    category: 'Fun',
    async execute(client, message, args) {
      
        let data = await random.getMeme()
    message.lineReplyNoMention(data)
    }
  }
  