const canvacord = require("canvacord");

module.exports = {
    name: "",
    async execute(client, message, args, Discord) {
        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])
        const img = user.displayAvatarURL({dynamic: true});
        const background = "https://cdn.discordapp.com/attachments/814445307764670495/817097979214954566/anime-nekopara-azuki-nekopara-chocola-nekopara-cinnamon-nekopara-hd-wallpaper-preview.jpg"
        
        let status;
        switch (user.presence.status) {
            case "online":status = "online";break;
            case "dnd":status = "dnd";break;
            case "idle":status = "idle";break;
            case "offline":status = "offline";break;
        }

        const rank = new canvacord.Rank()
            .setAvatar("https://cdn.discordapp.com/avatars/759368420453384213/73f4a519afdef185c740432ad05943ba.webp?size=4096")
            .setStatus(status)
            .setProgressBar("#FFFFFF", "COLOR")
            .setUsername("Username")
            .setDiscriminator("7000")
            .setBackground(background);

        rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                message.channel.send(attachment);
            });
    }
}