const random = require("something-random-on-discord").Random

module.exports = {
    name: "animeimg",
    aliases: ["ai"],
    async execute(client, message, args) {

        const type = args.join(' ')
        if (!type) return message.channel.send('Please enter a type of anime image!')

        if (type === 'cry') {
            let data = await random.getAnimeImgURL("cry")
            message.channel.send(data)
        } 
        if (type === 'waifu') {
            let data = await random.getAnimeImgURL("waifu")
            message.channel.send(data)
        }
        if (type === 'pat') {
            let data = await random.getAnimeImgURL("pat")
            message.channel.send(data)
        }
        if (type === 'hug') {
            let data = await random.getAnimeImgURL("hug")
            message.channel.send(data)
        }
        if (type === 'kiss') {
            let data = await random.getAnimeImgURL("kiss")
            message.channel.send(data)
        }
        if (type === 'slap') {
            let data = await random.getAnimeImgURL("slap")
            message.channel.send(data)
        }
        if (type === 'smug') {
            let data = await random.getAnimeImgURL("smug")
            message.channel.send(data)
        }
        if (type === 'punch') {
            let data = await random.getAnimeImgURL("punch")
            message.channel.send(data)
        }
    }
}
