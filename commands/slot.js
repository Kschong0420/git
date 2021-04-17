const Discord = require("discord.js");

module.exports = {
  name: "slot",
  aliases: ["slots", "spin"],
  async execute(client, message, args) {    
    const slots = [':grapes:', ':cherries:', ':lemon:', ':green_apple:', ':peach:', ':blueberries:', ':coconut:', ':kiwi:', ':tangerine:'];
    const slotOne = slots[Math.floor(Math.random() * slots.length)];
    const slotTwo = slots[Math.floor(Math.random() * slots.length)];
    const slotThree = slots[Math.floor(Math.random() * slots.length)];
    const slotfour = slots[Math.floor(Math.random() * slots.length)];
    const slotfive = slots[Math.floor(Math.random() * slots.length)];
    const slotsix = slots[Math.floor(Math.random() * slots.length)];
    const slotseven = slots[Math.floor(Math.random() * slots.length)];
    const sloteight = slots[Math.floor(Math.random() * slots.length)];
    const slotnine = slots[Math.floor(Math.random() * slots.length)];
    message.react(`🎰`);
    if (slotOne === slotTwo && slotOne === slotThree || slotfour === slotfive && slotfour === slotsix || slotseven === sloteight && slotseven === slotnine) {
        const won = new Discord.MessageEmbed()
            .setColor("#7289DA")
            .addField("|---|----|---|", `|${slotfour}|${slotfive}|${slotsix}|`)
            .addField("|---|----|---|", `|${slotOne}|${slotTwo}|${slotThree}|`)
            .addField("|---|----|---|", `|${slotseven}|${sloteight}|${slotnine}|`)
            .setFooter("Wow! " + message.author.username + " Congratulations!")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(won)
    } else {
        const lost = new Discord.MessageEmbed()
            .setColor("#7289DA")
            .addField("|---|----|---|", `|${slotfour}|${slotfive}|${slotsix}|`)
            .addField("|---|----|---|", `|${slotOne}|${slotTwo}|${slotThree}|`)
            .addField("|---|----|---|", `|${slotseven}|${sloteight}|${slotnine}|`)
            .setFooter("Awww " + message.author.username + " better luck next time. Try again!")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(lost)
    }
}}