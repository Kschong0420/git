const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js");

module.exports = {
  name: "membercount", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Info", //the command category for helpcmd [OPTIONAL]
  aliases: ["mbc"], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "membercount", //the command usage for helpcmd [OPTIONAL]
  description: "Shows the amount of members in detail.", //the command description for helpcmd [OPTIONAL]
 
  async execute (client, message, args) {
    try {
      await message.guild.members.fetch();
        message.lineReplyNoMention(new Discord.MessageEmbed()
        .setAuthor("Member-Count Information About: " +  message.guild.name, message.guild.iconURL({
          dynamic: true
        }))
        .setColor('GREEN')
        .addField("❱ Total USERS", "😀 \`" + message.guild.memberCount + "\`", true)
        .addField("❱ Total HUMANS", "👤 \`" + message.guild.members.cache.filter(member => !member.user.bot).size + "\`", true)
        .addField("❱ Total BOTS", "🤖 \`" + message.guild.members.cache.filter(member => member.user.bot).size + "\`", true)
        
        .addField("❱ ONLINE", "🟢 \`" + message.guild.members.cache.filter(member => member.presence.status != "offline").size + "\`", true)
        .addField("❱ ONLINE", "🟢 \`" + message.guild.members.cache.filter(member => !member.user.bot && member.presence.status != "offline").size + "\`", true)
        .addField("❱ ONLINE", "🟢 \`" + message.guild.members.cache.filter(member => member.user.bot && member.presence.status != "offline").size + "\`", true)
        
        .addField("❱ IDLE", "🟠 \`" + message.guild.members.cache.filter(member => member.presence.status == "idle").size + "\`", true)
        .addField("❱ IDLE", "🟠 \`" + message.guild.members.cache.filter(member => !member.user.bot && member.presence.status == "idle").size + "\`", true)
        .addField("❱ IDLE", "🟠 \`" + message.guild.members.cache.filter(member => member.user.bot && member.presence.status == "idle").size + "\`", true)
        
        .addField("❱ DND", "🔴 \`" + message.guild.members.cache.filter(member => member.presence.status == "dnd").size + "\`", true)
        .addField("❱ DND", "🔴 \`" + message.guild.members.cache.filter(member => !member.user.bot && member.presence.status == "dnd").size + "\`", true)
        .addField("❱ DND", "🔴 \`" + message.guild.members.cache.filter(member => member.user.bot && member.presence.status == "dnd").size + "\`", true)
        
        .addField("❱ OFFLINE", ":black_circle:\`" + message.guild.members.cache.filter(member => member.presence.status == "offline").size + "\`", true)
        .addField("❱ OFFLINE", ":black_circle:\`" + message.guild.members.cache.filter(member => !member.user.bot && member.presence.status == "offline").size + "\`", true)
        .addField("❱ OFFLINE", ":black_circle:\`" + message.guild.members.cache.filter(member => member.user.bot && member.presence.status == "offline").size + "\`", true)
        .setTimestamp()
      );
    } catch (e) {
      console.log(String(e.stack).bgRed)
      return message.lineReplyNoMention(new MessageEmbed()
        .setColor('RED')
        .setTitle(`An error occurred`)
        .setDescription(`\`\`\`${String(JSON.stringify(e)).substr(0, 2000)}\`\`\``)
      );
    }
  }
}
