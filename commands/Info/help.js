const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");


module.exports = {
  name: "help",
  aliases : ['help'],
  description: "Shows all available bot commands.",
  category: 'Info',
  cooldown: 5,
  usage: 'help [command]',
  async execute (client, message, args) {

    const p = await process.env.PREFIX
    const roleColor =
    message.guild.me.displayHexColor === "#000000"
      ? "#ffffff"
      : message.guild.me.displayHexColor;

  if (!args[0]) {
    let categories = [];

    const diremojis = {
        Fun: "🎆",
        Giveaway: "🎉",
        Info: "📻",
        Moderator: "🔨",
        Nsfw: "🔞",
        Util: "✨",
        Music: "🎶",
        //owner: "🔒",
        Game: "🎮",
        nekopara: "🐱",
        //abandoned: "❌",
        Image: "📸",
        Action: "🎬",
        Animal: "🐨",
        Osu: "<:osu:864943597235994625>"


    }
    const ignored = ["Owner", "Abandoned"]
    readdirSync("./commands/").forEach((dir) => {
      const editedName = `${diremojis[dir]}  ${dir.toUpperCase()}`
      if(ignored.includes(dir)) return;
      const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
        file.endsWith(".js")
      );

      const cmds = commands.filter((command) => {
        let file = require(`../../commands/${dir}/${command}`);

        return !file.hidden;
      }).map((command) => {
        let file = require(`../../commands/${dir}/${command}`);

        if (!file.name) return "No command name.";

        let name = file.name.replace(".js", "");

        return `\`${name}\``;
      });

      let data = new Object();

      data = {
        name: editedName,
        value: cmds.length === 0 ? "In progress." : cmds.join(" "),
      };

      categories.push(data);
    });

    const embed = new MessageEmbed()
      .setTitle("📬 Need help? Here are all of my commands:")
      .addFields(categories)
      .setDescription(
        `Use \`${p}help\` followed by a command name to get more additional information on a command. For example: \`${p}help ban\`.`
      )
      .setFooter(
        `Requested by ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor(roleColor);
    return message.channel.send(embed);
  } else {
    const command =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.find(
        (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
      );

    if (!command) {
      const embed = new MessageEmbed()
        .setTitle(`Invalid command! Use \`${p}help\` for all of my commands!`)
        .setColor("FF0000");
      return message.channel.send(embed);
    }

    const embed = new MessageEmbed()
      .setTitle("Command Details:")
      .addField(
        "COMMAND:",
        command.name ? `\`\`\`${command.name}\`\`\`` : "\`\`\`No name for this command.\`\`\`"
      )
      .addField(
        "ALIASES:",
        command.aliases
          ? `\`\`\`${command.aliases.join(", ")}\`\`\``
          : "No aliases for this command."
      )
      .addField(
        "COOLDOWN:",
        command.cooldown
          ? `\`\`\`js\n${command.cooldown} second(s)\`\`\``
          : "\`\`\`No cooldown for this command.\`\`\`"
      )
      .addField(
        "USAGE:",
        command.usage
          ? `\`\`\`${p}${command.usage}\`\`\``
          : `\`\`\`${p}${command.name}\`\`\``
      )
      .addField(
        "DESCRIPTION:",
        command.description
          ? `\`\`\`${command.description}\`\`\``
          : "\`\`\`No description for this command.\`\`\`"
      )
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setFooter(
        `Requested by ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor(roleColor);
    return message.channel.send(embed);
  }
},
};