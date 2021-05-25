const Discord = require('discord.js')
const DisTube = require("distube")
require('dotenv').config()
const client = new Discord.Client()
const fs = require("fs")
const fetch = require("node-fetch")
//const { CanvasSenpai } = require("canvas-senpai")
//const canva = new CanvasSenpai();

const memberCounter = require('./counters/member-counter')
const config = require("./config.json")
client.distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, leaveOnFinish: false })
client.emotes = config.emoji
client.aliases = new Discord.Collection()
client.snipes = new Discord.Collection()
client.esnipes = new Discord.Collection()
client.commands = new Discord.Collection()
client.events = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  if (err) return console.log("Could not find any commands!")
  const jsFiles = files.filter(f => f.split(".").pop() === "js")
  if (jsFiles.length <= 0) return console.log("Could not find any commands!")
  jsFiles.forEach(file => {
    const cmd = require(`./commands/${file}`)
    client.commands.set(cmd.name, cmd)
  })
})

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

//non nitro emoji 
///not stable yet
////sources : https://sourceb.in/LVgLZqK7KI

const MyStickyChannelID = '845747234074656818';
let cacheMsgs = [];

client.on('ready', async () => {
  /**
   * Get channel, if found then send the message to that channel and cache it
   */
  const stickyChannel = client.channels.cache.get(MyStickyChannelID);
  if (stickyChannel) {
    const m = await stickyChannel.send("I will be the last one forever!");
    cacheMsgs.push(m.id);
  }
});

client.on('message', async message => {
  if (message.author.bot) return;

  // Remove a message and remove form cache
  async function remove(id) {
    const msg = message.channel.messages.cache.get(id);
    cacheMsgs.shift();
    if (msg) await msg.delete().catch(_e => {});
  }

  // check channel is the sticky channel
  if (message.channel.id === MyStickyChannelID) {
    // if length is more or 2 but not 0 then queue delete all and return without a message
    if (cacheMsgs.length >= 2 && cacheMsgs.length !== 0) return cacheMsgs.forEach(async id => remove(id));

    // if cache is more then 0 then queue delete all AND send a message
    if (cacheMsgs.length > 0) cacheMsgs.forEach(async id => await remove(id));

    // Send message and add to cache
    const m = await message.channel.send('I will be the last one forever!');
    cacheMsgs.push(m.id);
  }
});

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

if(message.channel.name === 'vanilla-chat-bot' || message.channel.id === '835218953407299584') { 

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
client.snipes = new Map();
client.on('messageDelete', function(message, channel) {
      if (message.author.bot) return;
      client.snipes.set(message.channel.id, {
         content: message.content,
         profilephoto: message.author.displayAvatarURL({ dynamic : true }),
         author: message.author.tag,
         date: message.createdTimestamp,
         image: message.attachments.first() ? message.attachments.first().proxyURL : null
      }) 
})

//edit snipe core
client.esnipes = new Map();
client.on('messageUpdate', function(message, channel) {
      if (message.author.bot) return;
      client.esnipes.set(message.channel.id, {
         content: message.content,
         profilephoto: message.author.displayAvatarURL({ dynamic : true }),
         author: message.author.tag,
         date: message.createdTimestamp,
         image: message.attachments.first() ? message.attachments.first().proxyURL : null
      }) 
})

//status
client.once('ready', () => {
  client.user.setActivity('Chocola', {
    type: 'WATCHING'
  })
})

//remind membercount countdown
client.once('ready', () => {
  console.log('Member Counter Started Countdown!')
  memberCounter(client)
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
      { name: 'Channel', value: `${message.channel.name}` }
    )
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setFooter(`User ID: ${message.author.id}`)
  logchannel.send(embed)
})

//updated message log
client.on('messageUpdate', async message => {
  const logchannel = message.guild.channels.cache.find(ch => ch.name === 'logchannel')
  if (!logchannel) return
  if (message.author.bot) return
  const embed = new Discord.MessageEmbed()
    .setColor('#fca503')
    .setTitle('Edited Message')
    .addFields(
      { name: 'Author', value: `${message.author.tag}` },
      { name: 'Message Before Edited', value: `${message.content}` },
      { name: 'Channel', value: `${message.channel.name}` }
    )
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setFooter(`User ID: ${message.author.id}`)
  logchannel.send(embed)
})

///mentioned bot give info (issue: reply bot also trigger)
//client.on('message', async message => {
//  if(message.mentions.users.first()) {
//    if(message.mentions.users.first().id === '814038095128166400') return message.channel.send(
//        new Discord.MessageEmbed()
//        .setDescription('My prefix for this server is v or V')
//        .addField('Try running v help for lists of commands', ':white_check_mark:')
//    )
//}
//})

///mentioned bot give info (issue: reply bot also trigger)
//client.on("message", async message => {
//  if (message.author.bot) return;
//  if (message.mentions.has('814038095128166400')) {
//    const infoembed = new Discord.MessageEmbed()
//      .setTitle('You Pinged Me!')
//      .setDescription('My prefix is **v** or **V**. Use **v help** or **V help** to check the command list!')
//    message.channel.send(infoembed);
//  }
//})

///anti emote system (not working)
//client.on("message", async message => {
//  if (message.author.bot) return;
//  if (message.content === ' ') message.delete()
//})

//afk core
client.afk = new Map();
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = process.env.PREFIX;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  // return message.channel.send(`**${user_tag}** is currently afk. Reason: ${key.reason}`);
  // return message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000));
  const mentionedUser = message.mentions.users.first();
  if (message.content.includes(message.mentions.members.first())) {
    let mentioned = client.afk.get(message.mentions.users.first().id);
    if (mentioned) message.channel.send(`**${mentionedUser.username}** is currently afk. Reason: ${mentioned.reason}`);
  }
  let afkcheck = client.afk.get(message.author.id);
  if (afkcheck) return [client.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000))];

  if (!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(client, message, args);
});

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})

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

const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
client.distube
  .on("playSong", (message, queue, song) => {//message.channel.send( //{
    //`${client.emotes.play} | Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
    //))
    const user = song.user

    const PlayEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`${song.name}`)
      .setURL(`${song.url}`)
      .addField(`Duration: `, `${song.formattedDuration}`, true)
      .addField(`Requested by: `, `${user}`, true)
      .addField('\u200B', '\u200B', true)
      .addField(`Views: `, `${song.views}`, true)
      .addField(`Likes: `, `${song.likes}`, true)
      .addField(`Dislikes: `, `${song.dislikes}`, true)
      .addField(`Settings：`, `${status(queue)}`)
      .setThumbnail(`${song.thumbnail}`)
    message.channel.send(PlayEmbed)
  })

  .on("addSong", (message, queue, song) => {
    const estimate = queue.duration - queue.currentTime / 1000 - song.duration
    const hours = Math.floor(estimate / 60 / 60);
    const minutes = Math.floor(estimate / 60) - (hours * 60);
    const seconds = Math.floor(estimate % 60);
    var formatted = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

    message.channel.send(
      `${client.emotes.success} | Added \`${song.name}\` - \`${song.formattedDuration}\` to the queue by ${song.user}\nEstimated time: \`${formatted}\``
    )
  })

  .on("playList", (message, queue, playlist, song) => message.channel.send(
    `${client.emotes.play} | Play \`${playlist.title}\` playlist (${playlist.total_items} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
  ))
  .on("addList", (message, queue, playlist) => message.channel.send(
    `${client.emotes.success} | Added \`${playlist.title}\` playlist (${playlist.total_items} songs) to queue\n${status(queue)}`
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
  // DisTubeOptions.searchSongs = true
  .on("searchCancel", message => message.channel.send(`${client.emotes.error} | Searching canceled`))
  .on("error", (message, err) => message.channel.send(`${client.emotes.error} | An error encountered: ${err}`))


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

