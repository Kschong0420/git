const { cmdHelp } = require("rayzdev"); // Importing cmdHelp
const { MessageEmbed } = require("discord.js"); // Importing MessageEmbed

module.exports = {
  name: "help", // command name
  category: "Info", // command category
  description: "Shows all the commands and how to use them.", // command description
  aliases: [" "], // command aliases
  usage: "help [command]", // command usage
  async execute (client, message, args) {
    if (args[0]) {
      return cmdHelp(client, message, args[0], "v "); // return the function 'cmdHelp' with the correct parameters, "v" is the prefix.
    } else {
      return message.lineReply("", {
        embed: new MessageEmbed().setDescription(
          `Please specify a command that u want to check.`,
        ),
      });
    }
  },
};

    //description: '.',
    //usage: '',
    //category: '',