const canvacord = require("canvacord")
const Discord = require("discord.js")

module.exports = {
    name : 'spotify2',
    aliases : ['spot2' , 'sy2'],
    description : 'Spotify',
    cooldown: 5,
    async execute(client, message, args) {
       if (message.author.bot) return

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

let status;
if (user.presence.activities.length === 1) status = user.presence.activities[0];
else if (user.presence.activities.length > 1) status = user.presence.activities[1];

if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
  return message.lineReplyNoMention("This user is not listening music");
}

if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
  let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
      name = status.details,
      artist = status.state,
      album = status.assets.largeText;

const card = new canvacord.Spotify()
  .setAuthor(artist)
  .setAlbum(album)
  .setStartTimestamp(status.timestamps.start)
  .setEndTimestamp(status.timestamps.end)
  .setImage(image)
  .setTitle(name);

card.build()
  .then(buffer => {
      canvacord.write(buffer, "spotify.png");

      let attachment = new Discord.MessageAttachment(buffer, "spotify.png");
      return message.lineReplyNoMention(attachment);
       })}
}
    }