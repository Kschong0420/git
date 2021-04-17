const random = require("something-random-on-discord").Random
module.exports = {
    name: "meme",
    description: 'this is a meme command!',
    async execute(client, message, args) {
      
        let data = await random.getMeme()
    message.channel.send(data)
    }
  }
  