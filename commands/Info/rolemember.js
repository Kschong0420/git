const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "rolemember",
        aliases: ['rm', 'rl', 'rolelist'],
        cooldown: 0,
        description: 'Check a role have included who.',
        usage: 'rolemember <role>',
        category: 'Info',
       
    async execute(client, message, args) {
        if (args.includes("@everyone")) return;
        
        if (args.includes("@here")) return;

        if (!args[0]) return message.lineReply("Please Enter A Role!")

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!role) return message.lineReply("Please Enter A Valid Role!");

        let membersWithRole = message.guild.members.cache.filter(member => {
            return member.roles.cache.find(r => r.name === role.name);
        }).map(member => {
            return member.user.tag;
        })
        if (membersWithRole > 2048) return message.lineReplyNoMention('List Is Too Long!')

        let roleEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setThumbnail(message.guild.iconURL())
            .setTitle(`Users With The ${role.name} Role!`)
            .setDescription(membersWithRole.join("\n"));
        message.lineReplyNoMention(roleEmbed);
    }
}