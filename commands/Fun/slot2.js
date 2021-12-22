const Discord = require("discord.js");

module.exports = {
  name: "slot2",
  aliases: ["slots2", "spin2"],
  cooldown: 10,
  description: 'Test your luck.',
  usage: 'slot',
  category: 'Fun',
  async execute(client, message, args) {    
    const slots = ['<a:cat_flap:872832407924002836>', '<:kek:869182836538740738>', '<a:c_quietlaff:860326866959597569>', '<a:jan_popcorn:861477097116401684>', '<:whattheactualfuck:860325911592304681>', '<:PepeHappy:860322953778692106>', '<:Mat7:860324180339195934>', '<:man_of_culture:862842690382069760>', '<:pikagun:860347698447908895>'];
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
        message.lineReplyNoMention(won)
    } else {
        const lost = new Discord.MessageEmbed()
            .setColor("#7289DA")
            .addField("|---|----|---|", `|${slotfour}|${slotfive}|${slotsix}|`)
            .addField("|---|----|---|", `|${slotOne}|${slotTwo}|${slotThree}|`)
            .addField("|---|----|---|", `|${slotseven}|${sloteight}|${slotnine}|`)
            .setFooter("Awww " + message.author.username + " better luck next time. Try again!")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        message.lineReplyNoMention(lost)
    }
}}