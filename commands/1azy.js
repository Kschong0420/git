const Discord = require('discord.js')

module.exports = {
  name: '1azy',
  description: 'Easter egg',
  cooldown: 2147483,
  usage: '1azy',
  category: '1azy',
  aliases: ["misai", "niveaman", "rotten_flesh", "rf"],
  async execute (client, message, args, Discord) {
    if (message.author.id !== "607413926916784168") return message.lineReply("Invalid member input.");
    message.channel.send('From: Vanilla\n Happy birthday 1azy! And I would like to say thank you to u for appeared in my life. As a normal people, what I can do is just said happy birthday but I would like to try more creative things to let ur birthday become intresting and special. But this not important. I very appreciate you, even in server or just dm in a server. You contribute so much and pay a lot of time in server to chill with everyone. You also always dm me and shared a lot of ur experience, real life things and give a lot of idea. I really felt sad for me cuz cant do too much for u but I hope at least this can let you become happier in ur birthday. Thank you so much! Hope you always stay healthy and all gud things came true, and get gf earlier hehe. I would like to say again Thank you very much. Hope you enjoy ur birthday.')

    
  }
}
