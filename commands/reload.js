const glob = require("glob");

module.exports = {
    name: "reload",
    aliases: ["refresh"],
    cooldown: 0,
    description: 'You can\'t use it for Vanilla bot.',
    usage: 'reload',
    category: 'Owner',

    async execute(client, message, args) {
        if (message.author.id !== "759368420453384213") return message.lineReplyNoMention("Unknown Command.");
        client.commands.sweep(() => true)
        glob(`${__dirname}/**/*.js`, async (err, filePaths) => {
            filePaths.forEach((file) => {
                delete require.cache[require.resolve(file)];

                const pull = require(file);

                if (pull.name) {
                    client.commands.set(pull.name, pull);
                }
                if (pull.aliases && Array.isArray(pull.aliases)) {
                    pull.aliases.forEach((alias) => {
                        client.aliases.set(alias, pull.name);
                    });
                }
            });
            message.lineReplyNoMention('Reloaded commands!')
        });
    },
};