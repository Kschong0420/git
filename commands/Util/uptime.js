const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'uptime',
    aliases: ['runtime'],
    cooldown: 5,
    description: 'Check Vanilla bot\'s uptime.',
    usage: 'uptime',
    category: 'Util',
    async execute(client, message, args) {
        const d = moment.duration(message.client.uptime);
        const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
        const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
        const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
        const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`;
        const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
        const embed = new MessageEmbed()
            .setTitle('Vanilla bot\'s Uptime')
            .setThumbnail('https://cdn.discordapp.com/avatars/759368420453384213/e2786cd40d0d8af18f643623048d424f.webp')
            .setDescription(`\`\`\`prolog\n${days}, ${hours}, ${minutes}, and ${seconds}\`\`\``)
            .addField('Date Launched', date)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.lineReplyNoMention(embed);
    }
};