module.exports = {
  name: 'congrats',
  cooldown: 5,
  description: 'this is a congrats command!',
  execute (client, message, args) {
    message.channel.send('Congratulations!')
    message.channel.send('https://media3.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif?cid=ecf05e47cig9z195aamncc13gr3g943or5ruygp3628v1dvs&rid=giphy.gif')
  }
}
