const Discord = require('discord.js');

module.exports = {
    name: 'a_steal',
    aliases: 'steal2',
    category: 'Moderator',
    cooldown: 3,
    usage: 'steal2 <emoji/link/image> <name>',
    description: 'Steal emoji from other server or link given.',
    async execute(client, message, args) {

    function converter(bytes) {
        let formatos = ['B', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0B';
        let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        if (i <= 2) return Math.round(bytes / Math.pow(1024, i), 2) + formatos[i];
        if ((bytes / Math.pow(1024, i)).toFixed(3).includes(".00")) return Math.round(bytes / Math.pow(1024, i), 2) + formatos[i];
        if ((bytes / Math.pow(1024, i)).toFixed(3).includes(".0")) return ((bytes / Math.pow(1024, i)).toFixed(3) + formatos[i]).replace("0", "")
        return (bytes / Math.pow(1024, i)).toFixed(3) + formatos[i];
    }

    isEmoji = function (emoji) {
        const e = Discord.Util.parseEmoji(emoji)

        if (e.id === null) {
            return {
                name: e.name,
                id: e.id,
                animated: e.animated,
                response: false
            }
        } else {
            return {
                name: e.name,
                id: e.id,
                animated: e.animated,
                response: true
            }
        }
    }

    if (!message.member.permissions.has('MANAGE_EMOJIS')) {
        return message.lineReply('You cannot use this command\nPermission required: [\`MANAGE_EMOJIS\`]')
    }
    if (!message.guild.me.permissions.has('MANAGE_EMOJIS')) {
        return message.lineReply('I cannot use this command\nPermission required: [\`MANAGE_EMOJIS\`]')
    }

    let link = message.content.match("https://")
    let nome = ""
    let emoji = args[0]
    if (!link) {
        if (!emoji && !message.attachments.first() && !link) return message.lineReply("You need to specify a (link) a (emoji) or (image)");

        if (message.attachments.first()) {
            link = message.attachments.first().url

            nome = args[0]
            if (!nome) return message.lineReply("(image) you forgot to specify a name")

            let treco = message.attachments.first().size
            let peso = converter(treco)
            if (treco > 256000) return message.lineReply(`This (image) weighs \`${weight}\` and must be smaller than \`256KB\``)

        } else if (isEmoji(args[0]).response === true) {
            link = emoji.url;
            link = `https://cdn.discordapp.com/emojis/${isEmoji(args[0]).id}.${isEmoji(args[0]).animated ? "gif" : "png"}?v=1&size=64`

            nome = args.slice(1).join("")
            if (!nome) return message.lineReply("(emoji) you forgot to specify a name")

        } else {
            return message.channel.send("You need to specify a (link) a (emoji) or (image)");
        }
    } else if (link && !message.attachments.first() && isEmoji(args[0]).response === false) {
        link = args[0]
        nome = args.slice(1).join("")
        if (!nome) return message.lineReply("(link) you forgot to specify a name")

        const a = new Discord.MessageAttachment(link, "image.gif")
        message.channel.send(a).then((s) => {
            if (s.attachments.first().size >= 256000) {
                message.lineReply("This (link) weighs `" + converter(s.attachments.first().size) + "` and must be less than \`256KB\`")
            }
            size = s.attachments.first().size
            s.delete()
        })

        if (!link.endsWith('.gif') && !link.endsWith('.png') && !link.endsWith('.jpg') && !link.endsWith('.webp') && !link.endsWith('.jpeg')) return message.lineReply("Your image/link must end with\n[**\`.gif\`**|**\`.png\`**|**\`.jpg\`**|**\`.webp \`**]")
    }

    const emoji2 = await message.guild.emojis.create(link, nome);

    const embed = new Discord.MessageEmbed()
        .setTitle("Emoji Added")
        .setColor("GREEN")
        .setDescription(`**Emoji: ${emoji2}\nID: \`(${emoji2.id})\`\nName:** ${nome}`)
    message.lineReplyNoMention(embed)
}}