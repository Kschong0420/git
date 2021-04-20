module.exports = {
    name: "reactionrole",
    async execute(client, message, args, Discord) {
        if (message.author.id !== "759368420453384213") return message.channel.send("Unknown Command.");
        const channel = '802535435548491786'
        const r_osu = message.guild.roles.cache.find(role => role.name === "Osu");
        const r_minecrafter = message.guild.roles.cache.find(role => role.name === "Minecrafter");
        const r_left4dead = message.guild.roles.cache.find(role => role.name === "Left 4 Dead");
        const r_hentaimaster = message.guild.roles.cache.find(role => role.name === "Hentai Perms");
        const r_fps = message.guild.roles.cache.find(role => role.name === "FPS");
        const r_genshinimpact = message.guild.roles.cache.find(role => role.name === "Genshin impact");
        const r_amongus = message.guild.roles.cache.find(role => role.name === "Among Us");
        const r_roblox = message.guild.roles.cache.find(role => role.name === "Roblox");
        const r_fifa = message.guild.roles.cache.find(role => role.name === "FIFA");

        const e_osu = '🌸';
        const e_minecrafter = '⛏️';
        const e_left4dead = '🧟';
        const e_hentaimaster = '🔞';
        const e_fps = '🔫';
        const e_genshinimpact = '⚔️';
        const e_amongus = '🕵️‍♂️';
        const e_roblox = '♦️';
        const e_fifa = '⚽';

        let embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Role Vending Machine')
            .setThumbnail('https://media.giphy.com/media/3oKIPaI8ZrQS9wnigM/giphy.gif')
            .setImage('https://media.giphy.com/media/UITR7RbSJNDX4zZLRV/giphy.gif')
            .setFooter('React To Unlock Role Related Chats!')
            .setDescription('React with emoji to get the role!\n\n'
                + `${e_osu} Chat For Osu Peeps\n`
                + `${e_minecrafter} Minecraft Server Invites\n`
                + `${e_left4dead} L4D2 Peeps Invites \n`
                + `${e_hentaimaster} Unlocks NSFW Channel\n`
                + `${e_fps} FPS Games Related Chats\n`
                + `${e_genshinimpact} Genshin Peeps And Weebs\n`
                + `${e_amongus} Chat for Among Us peeps\n`
                + `${e_roblox} Discounted Minecraft Fans\n`
                + `${e_fifa} Football Addicts\n`);

        let messageEmbed = await message.channel.send(embed)
        messageEmbed.react(e_osu);
        messageEmbed.react(e_minecrafter);
        messageEmbed.react(e_left4dead);
        messageEmbed.react(e_hentaimaster);
        messageEmbed.react(e_fps);
        messageEmbed.react(e_genshinimpact);
        messageEmbed.react(e_amongus);
        messageEmbed.react(e_roblox);
        messageEmbed.react(e_fifa);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message, channel.id == channel) {
                if (reaction.emoji.name === e_osu) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(r_osu);
                }
                if (reaction.emoji.name === e_minecrafter) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(r_minecrafter);
                }
                if (reaction.emoji.name === e_left4dead) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(r_left4dead);
                }
                if (reaction.emoji.name === e_hentaimaster) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(r_hentaimaster);
                }
                if (reaction.emoji.name === e_fps) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(r_fps);
                }
                if (reaction.emoji.name === e_genshinimpact) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(r_genshinimpact);
                }
                if (reaction.emoji.name === e_amongus) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(r_amongus);
                }
                if (reaction.emoji.name === e_roblox) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(r_roblox);
                }
                if (reaction.emoji.name === e_fifa) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(r_fifa);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message, channel.id == channel) {
                if (reaction.emoji.name === e_osu) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(r_osu);
                }
                if (reaction.emoji.name === e_minecrafter) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(r_minecrafter);
                }
                if (reaction.emoji.name === e_left4dead) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(r_left4dead);
                }
                if (reaction.emoji.name === e_hentaimaster) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(r_hentaimaster);
                }
                if (reaction.emoji.name === e_fps) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(r_fps);
                }
                if (reaction.emoji.name === e_genshinimpact) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(r_genshinimpact);
                }
                if (reaction.emoji.name === e_amongus) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(r_amongus);
                }
                if (reaction.emoji.name === e_roblox) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(r_roblox);
                }
                if (reaction.emoji.name === e_fifa) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(r_fifa);
                }
            } else {
                return;
            }
        });

    }
}