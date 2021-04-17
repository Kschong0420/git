const { Message } = require('discord.js')

require('dotenv').config()
module.exports = (Discord, client, message) => {
  const prefix = process.env.PREFIX 
  if(!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/)
  const cmd = args.shift().toLowerCase()

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

  if (command) command.execute(client, message, args, Discord)
}

///note
// const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
// if(command) command.execute(client, message, cmd, args, Discord);

//.if (!message.content.toLowerCase().startsWith('t!')) return;

///
//const mentionRegex = RegExp(`^<@!?${client.user.id}>$`);
//const mentionRegexPrefix = RegExp(`^<@!?${client.user.id}> `);
//
//const prefix = message.content.match(mentionRegexPrefix) ?
//            message.content.match(mentionRegexPrefix)[0] : client.prefix;
///
//let prefix = new RegExp(`(^<@!?${client.user.id}>|f!)`)
//prefix = message.content.match(mentionPrefix)
//if(prefix){}

///
//if(message.guild) client.prefix = "shiki";
//const prefixREGEX = new RegExp(`^(${client.prefix ?`${client.prefix}|`: ""}<@!?${client.user.id}>|${client.user.username.toLowerCase()}|<@!?${message.author.id}> cmd|${message.author.username} cmd)`, "i", "(\s+)?");
//let prefixUSED = message.content.toLowerCase().match(prefixREGEX);
//prefixUSED = prefixUSED && prefixUSED.length && prefixUSED[0];
//Arguments | CommandName
//var args, commandName;
//if(!(prefixUSED)) {
// if(mention && !(mention.id === client.user.id)) return;
//  args = message.content.trim().split(/ +/g);
//  commandName = args.shift().toLowerCase();
// } else {
//  args = message.content.slice(prefixUSED.length).trim().split(/ +/g);
//  commandName = args.shift().toLowerCase();
// }

///
/** Usage:
 @<bot> <command>
 <prefix><command>
 <prefix><command>
 <bot.username> <command>
 <replytobot><command>
 @<you> cmd <command>
 <you.username> cmd <command> */
 ///