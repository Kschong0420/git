const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const devices = {
    web: "🌐",
    desktop: "💻",
    mobile: "📱"
};

module.exports = {

    name: "userinfo",

    aliases: ["whois", "ui", "user"],
    
    cooldown: 5,

    async execute(client, message, args) {

        const trimArray = (arr, maxLen = 30) => {
            if (arr.length > maxLen) {
                const len = arr.length - maxLen;
                arr = arr.slice(0, maxLen);
                arr.push(` and ${len} more roles...`);
            }
            return arr;
        };

        const BADGES = {
            "DISCORD_EMPLOYEE": "Discord Staff",
            "DISCORD_PARTNER": "Discord Partner",
            "BUGHUNTER_LEVEL_1": "Bug Hunter",
            "HYPESQUAD_EVENTS": "HypeSquad Events",
            "HOUSE_BRAVERY": "Bravery",
            "HOUSE_BRILLIANCE": "Brilliance",
            "HOUSE_BALANCE": "Balance",
            "EARLY_SUPPORTER": "Supporter",
            "VERIFIED_BOT": "Bot",
            "VERIFIED_DEVELOPER": "Dev"
        };

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        let members = message.guild.members.cache
            .sort((a, b) => a.joinedTimestamp - b.joinedTimestamp)
            .array();


        let position = new Promise((ful) => {
            for (let i = 1; i < members.length + 1; i++) {
                if (members[i - 1].id === user.id) ful(i);
            }
        });

        const upperCase = str => {
            return str.toUpperCase().replace(/_/g, " ").split(" ")
                .join(" ");
        };

        let roles = user.roles.cache
        .sort((a, b) => b.position - a.position)
        .map(role => role.toString())
        .slice(0, -1);

        if (roles.length < 30) {
            roles = roles.join(", ");
        } else if (roles.length > 30) {
            roles = trimArray(roles).join(", ");
        }
        if (roles.length === 0) {
            roles = "None";
        }

        if (user.user.presence.status == "offline") { userDevice = ""; } else if (!user.user.bot) { userDevice = devices[Object.keys(user.user.presence.clientStatus)[0]]; } else if (user.user.bot) { userDevice = ""; }

        let userFlags;
        if (user.user.flags === null) {
            userFlags = '';
        } else {
            userFlags = user.user.flags.toArray();
        }

        if (!user.user.bot) { userInfo = "No"; } else if (user.user.bot) { userInfo = "Yes"; }

        let hasNitro;
        if (user.user.displayAvatarURL({ dynamic: true }).endsWith('.gif')) {
            hasNitro = "Yes";
        } else if (!user.user.displayAvatarURL({ dynamic: true }).endsWith('.gif')) {
            hasNitro = "No";
        }

        let status;

        switch (user.presence.status) {

            case "online":

                status = "online";

                break;

            case "dnd":

                status = "dnd";

                break;

            case "idle":

                status = "idle";

                break;

            case "offline":

                status = "offline";

                break;

        }



        const embed = new MessageEmbed()

            .setTitle(`${user.user.username}'s info`)

            .setAuthor(`${user.user.tag} ${userDevice}`, user.user.displayAvatarURL({ dynamic: true, size: 512 }))

            .setColor(`#f3f3f3`)

            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

            .addFields(

                {

                    name: "ID: ",

                    value: user.user.id,

                    inline: false

                },

                {

                    name: "Name: ",

                    value: user.user.username,

                    inline: true

                },

                { name: "Nickname:", value: `${user.displayName}` || "None", inline: true },

                {

                    name: "Discriminator: ",

                    value: `#${user.user.discriminator}`,

                    inline: true

                },

                { name: "User Badges:", value: `${userFlags.length ? userFlags.map(flag => BADGES[flag]).join("") : "None"}`, inline: true },


                { name: "User Colour:", value: `${upperCase(user.displayHexColor)}`, inline: true },

                {

                    name: 'Avatar link: ',

                    value: `[Click Here](${user.user.displayAvatarURL()})`,

                    inline: true

                },

                {

                    name: 'Position when joined: ',

                    value: await position,

                    inline: true

                },

                { name: "Nitro:", value: `${hasNitro}`, inline: true },

                { name: "Bot:", value: `${userInfo}`, inline: true },

                {

                    name: "Activity: ",

                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,

                    inline: true

                },

                { name:'\u200B', value:'\u200B', inline: true},

                {

                    name: "Current Status: ",

                    value: status,

                    inline: true

                },


                { name: "Joined Discord", value: `${moment(user.user.createdTimestamp).format("DD MMM YYYY")} \n(${moment(user.user.createdTimestamp).fromNow()})`, inline: true },
                
                { name:'\u200B', value:'\u200B', inline: true},
                
                { name: "Joined Server", value: `${moment(user.joinedAt).format("DD MMM YYYY")} \n(${moment(user.joinedAt).fromNow()})`, inline: true },

                { name: "Highest Role:", value: `${user.roles.highest.id === user.guild.id ? "None" : user.roles.highest}`, inline: true},

                { name:'\u200B', value:'\u200B', inline: true},
                
                {
                    name: "Role count:",
                    value: user.roles.cache.size - 1,
                    inline: true
                },

                { name: "Roles:", value: `${roles}` }

            )



        await message.lineReplyNoMention(embed)

    }

}