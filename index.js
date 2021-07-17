const Discord = require('discord.js')
const DisTube = require("distube")
const SpotifyPlugin = require("@distube/spotify")
const { DiscordTogether } = require('discord-together');
require('dotenv').config()
const inlinereply = require('discord-reply')
const client = new Discord.Client({
  disableMention: 'everyone',
  shards: 'auto',
  restTimeOffset: 0
});

const fs = require("fs")
const fetch = require("node-fetch")
const { GiveawaysManager } = require("discord-giveaways");
//const { CanvasSenpai } = require("canvas-senpai")
//const canva = new CanvasSenpai();

const memberCounter = require('./counters/member-counter')
const config = require("./config.json")
client.distube = new DisTube(client, { searchSongs: 15, emitNewSongOnly: true, leaveOnFinish: false, leaveOnEmpty: false, emptyCooldown: 60000, plugins: [new SpotifyPlugin({ parallel: true })] })
client.emotes = config.emoji
client.aliases = new Discord.Collection()
client.snipes = new Discord.Collection()
client.esnipes = new Discord.Collection()
client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.discordTogether = new DiscordTogether(client);
client.categories = fs.readdirSync("./commands/");
["command_handler"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})

//giveaway core
client.giveaways = new GiveawaysManager(client, {
  storage: "./util/Data/giveaways.json",
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: 'GREEN',
    reaction: "🎉",
  },
});

//welcome card
//client.on('guildMemberAdd', async member => {
//  const channel = member.guild.channels.cache.find(ch => ch.name === '💬-chit-chatting');
//  if (!channel) return;

// let data = await canva.welcome(member, { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZEkMUju9qZyLuvQ12i0JRSrgad1dyn59GA&usqp=CAU", blur: false })

//  const attachment = new Discord.MessageAttachment(
//    data,
//    "welcome-image.png"
//  );

//  channel.send(
//    `Welcome to the server, ${member.user.username}!`,
//    attachment
//  );   
// });

//Discord Together - poker
//client.on('message', async message => {
//  if (message.content.startsWith('v poker-together')) {
//    if(!message.member.voice.channel) return message.channel.send('You need to join a voice channel to use this command.')
//      if(message.member.voice.channel) {
//          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
//            message.channel.send(`${invite.code}`);
//              message.channel.send('Click the link to join (Only for PC users)')
//          });
//      };
//  };
//});

//Discord Together - fishing
//client.on('message', async message => {
//  if (message.content.startsWith('v fishing-together')) {
//    if(!message.member.voice.channel) return message.channel.send('You need to join a voice channel to use this command.')
//     if(message.member.voice.channel) {
//          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
//             message.channel.send(`${invite.code}`);
//             message.channel.send('Click the link to join (Only for PC users)')
//          });
//      };
//  };
//});

//Discord Together - betrayal
//client.on('message', async message => {
//  if (message.content.startsWith('v betrayal-together')) {
//    if(!message.member.voice.channel) return message.channel.send('You need to join a voice channel to use this command.')
//      if(message.member.voice.channel) {
//         client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
//              message.channel.send(`${invite.code}`);
//              message.channel.send('Click the link to join (Only for PC users)')
//         });
//      };
//  };
//});

//invisible typing detect
client.on('typingStart', (ch, user) => {
  if (user.presence.status === 'offline') {
    if (ch.type == 'dm') return;
    ch.send(`Detect ${user.tag} opening invisible mode!`).then(m => m.delete({ timeout: 10000 }));
  }
})

//non nitro emoji 
///not stable yet
////sources : https://sourceb.in/LVgLZqK7KI
client.on("message", async message => {
  function Check(str) {
    if (
      client.emojis.cache.find(emoji => emoji.name === str) ||
      message.guild.emojis.cache.find(emoji => emoji.name === str)
    ) {
      return true;
    } else {
      return false;
    }
  }
  if (message.content.startsWith(":") && message.content.endsWith(":")) {
    let EmojiName = message.content.slice(1, -1);

    if (Check(EmojiName) === true) {
      const channel = client.channels.cache.get(message.channel.id);
      try {
        let webhooks = await channel.fetchWebhooks();
        let webhook = webhooks.first();
        if (webhook === undefined || null || !webhook) {
          let Created = channel
            .createWebhook("Vanilla", {
              avatar:
                "https://cdn.discordapp.com/avatars/814038095128166400/17c9d4d1b887e40b61be092b9f2988ee.webp?size=256"
            })
            .then(async webhook => {
              const emoji =
                client.emojis.cache.find(e => e.name == EmojiName).id ||
                message.guild.emojis.cache.find(e => e.name === EmojiName).id;

              await webhook.send(`${client.emojis.cache.get(emoji)}`, {
                username: message.author.username,
                avatarURL: message.author.avatarURL({ dynamic: true })
              });
              message.delete();
            });
        }

        const emoji =
          client.emojis.cache.find(e => e.name == EmojiName).id ||
          message.guild.emojis.cache.find(e => e.name === EmojiName).id;

        await webhook.send(`${client.emojis.cache.get(emoji)}`, {
          username: message.author.username,
          avatarURL: message.author.avatarURL({ dynamic: true })
        });
        message.delete();
      } catch (error) {
        console.log(`Error :\n${error}`);
      }
    }
  }
});

//chat bot
client.on('message', async (message) => {
  if (message.author.bot || message.channel.type === 'dm') return;

  if (message.channel.name === 'vanilla-chat-bot' || message.channel.id === '835218953407299584') {

    fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=WKTXwCVoosGtQNCNfIymRmx1t`)
      .then(response => response.json())
      .then(data => {
        message.channel.send(data.response)
      }).catch(() => { message.channel.send('error') })


  }
})

//global chat
client.on('message', async message => {
  if (message.channel.name == "vanilla-chat" && !message.author.bot) {

    client.guilds.cache.forEach(guild => {

      if (guild == message.guild) return
      let channel = guild.channels.cache.find(ch => ch.name === "vanilla-chat")

      if (!channel) return

      let embed = new Discord.MessageEmbed()

        .setAuthor(message.author.tag + " | Vanilla Bot Global Chat")
        .setColor("RANDOM")

        .setDescription(message.content)

        .setFooter("Server: " + message.guild.name)
        .setTimestamp()
      channel.send(embed)
    })
  }
})

//snipe core
//client.snipes = new Map();
//client.on('messageDelete', function (message, channel) {
//  if (message.author.bot) return;
//  client.snipes.set(message.channel.id, {
//    content: message.content,
//   profilephoto: message.author.displayAvatarURL({ dynamic: true }),
//    author: message.author.tag,
//    date: message.createdTimestamp,
//    image: message.attachments.first() ? message.attachments.first().proxyURL : null
//  })
//})

//recon snipe
client.on('messageDelete', (message) => {
  if (message.author.bot) return;
  let snipes = client.snipes.get(message.channel.id) || [];
  if (snipes.length > 5) snipes = snipes.slice(0, 4);
  snipes.unshift({
    msg: message,
    date: message.createdTimestamp,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null,
    time: Date.now()
  })
  client.snipes.set(message.channel.id, snipes)
})

//edit snipe core
client.esnipes = new Map();
client.on('messageUpdate', function (message, channel) {
  if (message.author.bot) return;
  client.esnipes.set(message.channel.id, {
    content: message.content,
    profilephoto: message.author.displayAvatarURL({ dynamic: true }),
    author: message.author.tag,
    date: message.createdTimestamp,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})

//status
//client.once('ready', () => {
//  client.user.setActivity('Chocola', {
//    type: 'WATCHING'
//  })
//})

client.on('ready', () => {
  console.log(`${client.user.username} ✅`)

  const arrayOfStatus = [
    `in ${client.guilds.cache.size} servers`,
    `in ${client.channels.cache.size} channels`,
    `with ${client.users.cache.size} members`,
    `Chocola eating`,
  ];

  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.user.setActivity(`${status}`, {
      type: "STREAMING",
      url: "https://www.youtube.com/watch?v=ZmIqFqnMj60"
    })
    index++;
  }, 10000);
})

//remind membercount countdown
client.once('ready', () => {
  console.log('Member Counter Started Countdown!')
  memberCounter(client)
})

//updated messages log
client.on('messageUpdate', message => {
  if (message.author.id === client.user.id) return;
  if (message.content.toLowerCase().startsWith('https://')) return;
  if (message.author.bot) return
  if (!message.partial) {
    const channel = message.guild.channels.cache.find(channel => channel.name === "logchannel")
    if (!channel) return
    const editedInChannel = client.channels.cache.get(message.channel.id)
    if (channel) {
      const embed29 = new Discord.MessageEmbed()
        .setTitle(`Edited Message`)
        //.setURL(message.url)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .addField('Author', `${message.author.tag}`)
        .addField(`Before`, `${message}`)
        .addField(`After`, `${editedInChannel.messages.cache.get(message.id)}`)
        .addField(`Channel`, `<#${message.channel.id}>`)
        .setDescription(`[Jump to Message](${message.url})`)
        .setColor('#fca503')
        .setFooter(`User ID: ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
      channel.send(embed29)
    } else return
  }
})


//deleted message log
client.on('messageDelete', async message => {
  const logchannel = message.guild.channels.cache.find(ch => ch.name === 'logchannel')
  if (!logchannel) return
  if (message.author.bot) return
  const embed = new Discord.MessageEmbed()
    .setColor('#0352fc')
    .setTitle('Deleted Message')
    .addFields(
      { name: 'Author', value: `${message.author.tag}` },
      { name: 'Deleted Message', value: `${message.content}` },
      { name: 'Channel', value: `<#${message.channel.id}>` }
    )
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setFooter(`User ID: ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }))
  logchannel.send(embed)
})

///mentioned bot give info
client.on('message', async message => {
  const prefix = process.env.PREFIX
  if (!message.reply) return
  if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) return message.lineReplyNoMention(new Discord.MessageEmbed()
    .setTitle("Vanilla Bot Info")
    .setDescription(
      `[Invite me](https://discord.com/oauth2/authorize?client_id=814038095128166400&scope=bot&permissions=8589934591)`
    )
    .addField('Prefix', `My prefix is \`${prefix}\`.`)
    .addField('Need Help?', 'Use `v help` to get a list of command.')
    .setFooter(
      `Requested by ${message.author.tag}`,
      message.author.displayAvatarURL({
        dynamic: true
      })
    )
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL({
      dynamic: true
    }))
    .setColor('#510daf')
  )

})

///anti emote system (not working)
//client.on("message", async message => {
//  if (message.author.bot) return;
//  if (message.content === ' ') message.delete()
//})

//remind music bot ready
client.on("ready", () => {
  console.log(`${client.user.tag} is ready to play music.`)
  //const server = client.voice.connections.size
  //client.user.setActivity({ type: "PLAYING", name: `music on ${server} servers` })
})

//music bot core require distube
client.on("message", async message => {
  const prefix = config.prefix
  if (!message.content.startsWith(prefix) || message.author.bot) return
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
  if (!cmd) return
  if (cmd.inVoiceChannel && !message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
  try {
    cmd.run(client, message, args)
  } catch (e) {
    console.error(e)
    message.reply(`Error: ${e}`)
  }
})

const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "Queue" : "Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
client.distube
  .on("playSong", (queue, song) => {//message.channel.send( //{
    //`${client.emotes.play} | Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
    //))

    const PlayEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`${song.name}`)
      .setURL(`${song.url}`)
      .addField(`Views: `, `${song.views}`, true)
      .addField(`Likes: `, `${song.likes}`, true)
      .addField(`Dislikes: `, `${song.dislikes}`, true)
      .addField(`Uploader `, `${song.uploader.name}`, true)
      .addField(`Requested by: `, `${song.user}`, true)
      .addField(`Duration: `, `${song.formattedDuration}`, true)
      .addField(`Settings：`, `${status(queue)}`)
      .setThumbnail(`${song.thumbnail}`)
    queue.textChannel.send(PlayEmbed)
  })

  .on("addSong", (queue, song) => {
    const estimate = queue.duration - queue.currentTime / 1000 - song.duration
    const hours = Math.floor(estimate / 60 / 60);
    const minutes = Math.floor(estimate / 60) - (hours * 60);
    const seconds = Math.floor(estimate % 60);
    var formatted = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

    queue.textChannel.send(
      `${client.emotes.success} | Added \`${song.name}\` - \`${song.formattedDuration}\` to the queue by ${song.user}\nEstimated time: \`${formatted}\``
    )
  })

  //.on("playList", (message, queue, playlist, song) => message.channel.send(
  //  `${client.emotes.play} | Play \`${playlist.title}\` playlist (${playlist.total_items} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
  //))
  .on("addList", (queue, playlist) => queue.textChannel.send(
    `${client.emotes.success} | Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
  ))
  // DisTubeOptions.searchSongs = true
  .on("searchResult", (message, result) => {
    let i = 0
    const SearchEmbed = new Discord.MessageEmbed()
      .setTitle('**Song Searched List**')
      .setDescription(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n`)
      .setFooter('Enter anything else or wait 60 seconds to cancel')
    message.channel.send(SearchEmbed)
  })
  .on("initQueue", queue => {
    queue.autoplay = true;
    queue.volume = 50;
  })
  // DisTubeOptions.searchSongs = true
  .on("searchCancel", message => message.channel.send(`${client.emotes.error} | Searching canceled`))
  .on("error", (channel, error) => channel.send(`${client.emotes.error} | An error encountered: ${error}`))


client.login(process.env.DISCORD_TOKEN)

// { name: 'Edited Message', value: `${message.edit.content}` },

// Special Thanks
// Thank for the following tutorial youtuber below for teach the code to bot creator for this bot:
// 1.codelyon  - newbie suitable tutorial 
// 2.fusion terror - useful code and clear

///Super Special Thanks
// 1.reconlx (and his npm package) - make bot more fun and fuction with lot of npm package 

//music estimate format time credit : https://gomakethings.com/how-to-convert-seconds-to-minutes-and-hours-with-vanilla-js/
//appreciate

//made by Kschong0420_

