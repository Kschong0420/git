const fetch = require('node-fetch');

module.exports = {
  name: "morse",
  aliases: [],
  cooldown: 3,
  description: "Change a text to morse code.",
  category: "Fun",
  usage: "morse <text>",

  async execute(client, message, args) {

    let text = args.join("+")
    if (!text) return;
    message.delete()

    let res = await fetch('https://api.popcatdev.repl.co/texttomorse?text=' + text);
    let json = await res.json();
    message.channel.send(json.morse)
  }
}