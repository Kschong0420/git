//rt = reverse text

module.exports = {
    name: "rt",
    aliases: ["reverse"],
    cooldown: 5,
    description: "Reverses the given text",
    usage: 'rt <text>',
    category: 'Fun',
    async execute(client, message, args) {
        const text = args.join(" ")
        if(!text) return message.reply("Please give something to reverse!")
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        message.channel.send(result)
    }
}