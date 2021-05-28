const Discord = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
    name: 'github',
    cooldown: 5,
    async execute(client, message, args) {
      const user = args.join('+')
          if(!user) return message.lineReply('Please provide a valid user to search.') 
          const url = `https://api.github.com/users/${user}` 
  
          let json
          try{
              json = await fetch(url).then(res => res.json())
          }
          catch(e) {
              return message.lineReply('An error occured, please try again later.')
          }
          if (json.message) return message.lineReply("User Not Found.")
  
      const embed = new Discord.MessageEmbed()
      .setTitle("Github User Info For " + json.login)
      .setURL(`https://github.com/${args.join("+")}`)
      .addField("Username", json.login, true)
      .addField("Followers", json.followers, true)
      .addField("Following", json.following, true)
      .addField("Public Repositories", json.public_repos, true)
      .addField("Email", json.email ? json.email : "None", true)
      .setColor("#4169e1")
      .addField("Created At", json.created_at, true)
      .addField("Bio:", json.bio ? json.bio : "None")
      .setThumbnail(json.avatar_url)
  
      message.lineReplyNoMention(embed)
  
    }
  
  }