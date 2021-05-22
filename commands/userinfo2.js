const moment = require('moment');
const Discord = require('discord.js');
const DEVICES = {
    web: "🌐",
    desktop: "💻",
    mobile: "📱"
};

const BADGES = {
    "DISCORD_EMPLOYEE": "<:DiscordStaff:816709237991800853>",
    "DISCORD_PARTNER": "<:DiscordPartner:816709471241895937>",
    "BUGHUNTER_LEVEL_1": "<:BugHunter:816709672009859113>",
    "HYPESQUAD_EVENTS": "<:HypeSquadEvents:816709868332908604>",
    "HOUSE_BRAVERY": "<:Bravery:816710031864889374>",
    "HOUSE_BRILLIANCE": "<:Brilliance:816710173107552276>",
    "HOUSE_BALANCE": "<:Balance:816710336786726932>",
    "EARLY_SUPPORTER": "<:Supporter:816710470332710952>",
    "VERIFIED_BOT": "<:Bot:816710613538439199>",
    "VERIFIED_DEVELOPER": "<:Dev:816710766257504317>"
};

const STATUSES = {
    "online": "<:Online:816710876559441951>",
    "idle": "<:Idle:816710969522520124>",
    "dnd": "<:dnd:816711058826723334>",
    "streaming": "<:streaming:816711173582880768>",
    "offline": "<:Offline:816711278424358983>"
};

module.exports = {
    name: "userinfo2",
    description: 'Shows info about a user.',
    cooldown: 5,
    async execute(client, message, args) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        const trimArray = (arr, maxLen = 10) => {
            if (arr.length > maxLen) {
                const len = arr.length - maxLen;
                arr = arr.slice(0, maxLen);
                arr.push(` and ${len} more roles...`);
            }
            return arr;
        };

        const upperCase = str => {
            return str.toUpperCase().replace(/_/g, " ").split(" ")
                .join(" ");
        };

        const titleCase = str => {
            return str.toLowerCase().split(" ")
                .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
                .join(" ");
        };

        let roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);

        let userFlags;
        if (member.user.flags === null) {
            userFlags = '';
        } else {
            userFlags = member.user.flags.toArray();
        }
        if (member.user.presence.status == "offline") { userDevice = ""; } else if (!member.user.bot) { userDevice = DEVICES[Object.keys(member.user.presence.clientStatus)[0]]; } else if (member.user.bot) { userDevice = ""; }
        if (!member.user.bot) { userInfo = "No"; } else if (member.user.bot) { userInfo = "Yes"; }
        if (member.user.presence.status == "dnd") { status = "DND"; } else status = titleCase(member.user.presence.status);
        if (roles.length < 10) {
            roles = roles.join(", ");
        } else if (roles.length > 10) {
            roles = trimArray(roles).join(", ");
        }
        if (roles.length === 0) {
            roles = "None";
        }

        let hasNitro;
        if (member.user.displayAvatarURL({ dynamic: true }).endsWith('.gif')) {
            hasNitro = "Yes";
        } else if (!member.user.displayAvatarURL({ dynamic: true }).endsWith('.gif')) {
            hasNitro = "No";
        }
        const embed = new Discord.MessageEmbed()
            .setAuthor(`${member.user.tag} ${userDevice}`, member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .addFields(
                { name: "User Badges", value: `${userFlags.length ? userFlags.map(flag => BADGES[flag]).join("") : "None"}`, inline: false },
                { name: "Joined Discord", value: `${moment(member.user.createdTimestamp).format("DD MMM YYYY")}`, inline: true },
                { name: "Joined Server", value: `${moment(member.joinedAt).format("DD MMM YYYY")}`, inline: true },
                { name: "Nickname", value: `${member.displayName}` || "None", inline: true },
                { name: "Discriminator", value: `${member.user.discriminator}`, inline: true },
                { name: "Bot", value: `${userInfo}`, inline: true },
                { name: "Nitro", value: `${hasNitro}`, inline: true },
                { name: "Status", value: `${status}${STATUSES[member.user.presence.status]}`, inline: true },
                { name: "User Colour", value: `${upperCase(member.displayHexColor)}`, inline: true },
                { name: "User ID", value: `${member.user.id}`, inline: true },
                { name: "Highest Role", value: `${member.roles.highest.id === message.guild.id ? "None" : member.roles.highest}`, inline: true },
                { name: "Roles", value: `${roles}` }
            )
            .setColor(`BLUE`);
        message.channel.send(embed);
    }

};