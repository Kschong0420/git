const random = require("something-random-on-discord").Random

module.exports = {
    name: "animeimg",
    aliases: ["ai"],
    cooldown: 10,
    description: 'Get an anime image or gif according to the type you want.',
    usage: 'animeimg <pat/hug/waifu/cry/kiss/slap/smug/punch>',
    category: 'Image',
    async execute(client, message, args) {

        const type = args.join(' ')
        if (!type) return message.lineReply('Please enter a type of anime image!')

        if (type === 'cry') {
            let data = await random.getAnimeImgURL("cry")
            message.lineReplyNoMention(data)
        } 
        if (type === 'waifu') {
            let data = await random.getAnimeImgURL("waifu")
            message.lineReplyNoMention(data)
        }
        if (type === 'pat') {
            let data = await random.getAnimeImgURL("pat")
            message.lineReplyNoMention(data)
        }
        if (type === 'hug') {
            let data = await random.getAnimeImgURL("hug")
            message.lineReplyNoMention(data)
        }
        if (type === 'kiss') {
            let data = await random.getAnimeImgURL("kiss")
            message.lineReplyNoMention(data)
        }
        if (type === 'slap') {
            let data = await random.getAnimeImgURL("slap")
            message.lineReplyNoMention(data)
        }
        if (type === 'smug') {
            let data = await random.getAnimeImgURL("smug")
            message.lineReplyNoMention(data)
        }
        if (type === 'punch') {
            let data = await random.getAnimeImgURL("punch")
            message.lineReplyNoMention(data)
        }
    }
}
