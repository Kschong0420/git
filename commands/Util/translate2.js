const { MessageEmbed } = require('discord.js');
const translate = require('@iamtraction/google-translate')
module.exports = {
    name: 'translate2',
    aliases: ['t2', 'tl2'],
    cooldown: 3,
    description: 'Translate a sentence.',
    usage: 'translate2 <language> <word>',
    category: 'Util',
    async execute(client, message, args) {
        try {
            const query = args.slice(1).join(" ");
            if (!query) return message.lineReply("Please type a text to translate.")
            const arg = args[0]

            const translated = await translate(query, { to: `${arg}` });
            const embed = new MessageEmbed()
                .setTitle("Translated Successfully.")
                .addField("Your Query", `\`\`\`fix\n${query}\`\`\``)
                .addField('Selected Language', `\`\`\`fix\n${arg}\`\`\``)
                .addField('Result', `\`\`\`fix\n${translated.text}\`\`\``)
                .setColor("#d4c5a2")
            message.lineReplyNoMention(embed)

        } catch (error) {
            return message.lineReplyNoMention("Your question is invalid! You need to use the command like this: `>translate2 <language> <text>`")
                .then(() => console.log(error));
        }
    }
}