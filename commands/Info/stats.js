const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');

module.exports = {
    name: 'stats',
    aliases: ['statistics', 'metrics', 'stat'],
    cooldown: 10,
    description: 'Show Vanilla bot\'s bot statistics.',
    usage: 'stats',
    category: 'Info',
    async execute(client, message, args) {
        const d = moment.duration(message.client.uptime);
        const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
        const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
        const clientStats = stripIndent`
      Servers   :: ${message.client.guilds.cache.size}
      Users     :: ${message.client.users.cache.size}
      Channels  :: ${message.client.channels.cache.size}
      WS Ping   :: ${Math.round(message.client.ws.ping)}ms
      Uptime    :: ${days} and ${hours}
    `;
        const { totalMemMb, usedMemMb } = await mem.info();
        const serverStats = stripIndent`
      OS        :: ${await os.oos()}
      CPU       :: ${cpu.model()}
      Cores     :: ${cpu.count()}
      CPU Usage :: ${await cpu.usage()} %
      RAM       :: ${totalMemMb} MB
      RAM Usage :: ${usedMemMb} MB 
    `;
        const embed = new MessageEmbed()
            .setTitle('Vanilla bot\'s Statistics')
            .addField('Commands', `\`${message.client.commands.size}\` commands`, true)
            .addField('Client', `\`\`\`asciidoc\n${clientStats}\`\`\``)
            .addField('Server', `\`\`\`asciidoc\n${serverStats}\`\`\``)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.lineReplyNoMention(embed);
    }
};