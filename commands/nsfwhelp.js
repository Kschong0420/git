const recon = require('reconlx');
const { MessageEmbed } = require("discord.js");
const ReactionPages = recon.ReactionPages;

module.exports = {
    name: 'nsfwhelp',
    aliases: ["nsfwlist", "nsfw"],
    async execute(client, message, args, Discord) {
        if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
        const embed1 = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Nsfw command list Page 1')
            .setDescription('Type v <command> or V <command> to get a NSFW picture!')
            .setFooter('NSFW command only can use in NSFW channel.')
            .addFields(
                { name: 'sfwaw', value: 'get a sfw anime wallpaper (maybe contain nsfw)' },
                { name: 'sfwmaw', value: 'get a sfw mobile phone anime wallpaper (maybe contain nsfw)' },
                { name: 'sfwneko', value: 'get a sfw neko picture (maybe contain nsfw)' },
                { name: 'nsfwahegao', value: 'So happy woman faces :))'},
                { name: 'nsfwass', value: 'I know you like anime ass~ uwu'},
                { name: 'nsfwbdsm', value: "If you don't know what it is, search it up"},
                { name: 'nsfwboobjob', value: 'So soft, round ... gentle ... damn we love it'},
                { name: 'nsfwblowjob', value: 'Basically an image of a girl sucking on a sharp blade!'},
                { name: 'nsfwcreampie', value: 'So hot, sticky, and inside uwu'},
                { name: 'nsfwcum', value: 'Basically sticky white stuff that is usually milked from sharpies.'},
                { name: 'nsfwelves', value: "So, it's not Elvis Presley, but i know, you like it :)"},
                { name: 'nsfwero', value: 'eros, ero Uniforms, etc, you know what eros are :3'},
                { name: 'nsfwfemdom', value: 'Female Domination?'},
                { name: 'nsfwfoot', value: 'So you like smelly feet huh?'},
                { name: 'nsfwgangbang', value: '5 on 1? Uh..'},
                { name: 'nsfwgif', value: 'Basically an animated image, so yes :3'},
                { name: 'nsfwglasses', value: 'Girls that wear glasses, uwu~'},
                { name: 'nsfwhentai', value: 'Sends a random vanilla hentai imageURL~'},
                { name: 'nsfwincest', value: 'I know, you like it. Brother and sister <3 And..mo...omg'},
                { name: 'nsfwmanga', value: 'Sends a random doujin page imageURL!'},
                { name: 'nsfwmasturbation', value: 'You like lewd solo?~'},
                { name: 'nsfwmaw', value: 'NSFW Anime Mobile Wallpaper'},
                { name: 'nsfwneko', value: 'NSFW Neko Girls (Cat Girls)'},
                { name: 'nsfworgy', value: 'Group Lewd Acts'},
                { name: 'nsfwpublic', value: 'Some people like do it on a public..uh~'},
                { name: 'nsfwtentacles', value: "I'm sorry but, why do you like it? Uh.."},
                { name: 'nsfwthighs', value: "Oh, i so like it, it's best of the best, like a religion <3"},
                { name: 'nsfwuniform', value: 'School and many other Uniforms~'},
                { name: 'nsfwvagina', value: 'The genitals of a female, or a cat, you give the meaning.'},
                { name: 'nsfwyuri', value: 'What about cute Les?~'},
            )

        const pages = [embed1];
        const emojis = ['◀', '▶'];

        ReactionPages(message, pages, true, emojis);//if want set time can put number value in ms to set time able beside emojis
    }
}

//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' }, 
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },

//.setFooter('Type number in chat can flip the nsfw command list to that number of page quickly!')