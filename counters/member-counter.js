module.exports = async (client) => {
  const guild = client.guilds.cache.get('860189863516307486')// server id
  setInterval(() => {
    const memberCount = guild.memberCount
    const channel = guild.channels.cache.get('860319671487561728')// channel id
    if(!channel) return;
    channel.setName(`Member Count: ${memberCount.toLocaleString()}`)
    console.log('Updating Member Count')
  }, 1800000)// 1000 ms = 1 sec , 1800000 = 30 mins
}
