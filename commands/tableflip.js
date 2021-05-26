const Discord = require("discord.js");
const frames = [
	'(-°□°)-  ┬─┬',
	'(╯°□°)╯    ]',
	'(╯°□°)╯  ︵  ┻━┻',
	'(╯°□°)╯       [',
	'(╯°□°)╯           ┬─┬'
];
module.exports = {
    name: "tableflip",
    aliases: ["tbf"],
    cooldown: 10,
    async execute(client, message, args) {
    const msg = await message.lineReplyNoMention('(\\\\°□°)\\\\  ┬─┬');
    for (const frame of frames) {
        setTimeout(() => {}, 4000);
        await msg.edit(frame);
    }
    return message;
}}