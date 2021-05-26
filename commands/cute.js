module.exports = {
  name: 'cute',
  cooldown: 10,
  description: 'this is a cute command!',
  execute (client, message, args) {
    message.lineReply('Thank You, you CUTE too<3!')
    message.lineReplyNoMention('https://pa1.narvii.com/5862/7019c7a14dff76012d9b84019324cc60fc5b9640_hq.gif')
  }
}
