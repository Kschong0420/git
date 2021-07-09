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
    description: 'Table flip animation.',
    usage: 'tableflip',
    category: 'Fun',
    async execute(client, message, args) {
    const msg = await message.lineReplyNoMention('(\\\\°□°)\\\\  ┬─┬');
    for (const frame of frames) {
        setTimeout(() => {}, 4000);
        await msg.edit(frame);
    }
    return message;
}}