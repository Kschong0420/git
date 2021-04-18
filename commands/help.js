const recon = require('reconlx');
const { MessageEmbed } = require("discord.js");
const ReactionPages = recon.ReactionPages;

module.exports = {
    name: 'help',
    async execute(client, message, args, Discord) {
        const embed1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 1')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: '8ball <question>', value: 'let the bot help you to answer your question in yes or no' },
                { name: 'achievement <text>', value: 'generate a custom achievement' },
                { name: 'a_userinfo <username>', value: 'check someone info with more clearly detail' },
                { name: 'advice', value: 'get some advice' },
                { name: 'afk <reason>', value: 'set you to afk list' },
                { name: 'anime <anime name>', value: 'check anime you want' },
                { name: 'animeimg <pat/hug/waifu/cry/kiss/slap/smug/punch>', value: 'get a anime image or gif according to the type you want' },
                { name: 'avatar <one or more than one username>', value: 'check their avater' },
                { name: 'avatar2 <username>', value: 'check the avatar in bigger size' },
                { name: 'aw', value: 'get a anime wallpaper' },
            )

        const embed2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 2')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'bet <things you want bet>', value: 'betting something' },
                { name: 'binary <encode/decode> <query>', value: 'encode your text to code or decode your code to text' },
                { name: 'blackjack', value: 'play backjack'},
                { name: 'bot', value: 'check the bot work infomation' },
                { name: 'butter', value: 'fly~' },
                { name: 'cal <add/subtract/multiply/divide> <first number> <second number>', value: 'do operation between first number to second number' },
                { name: 'channel <channel name>', value: 'check the channel info' },
                { name: 'character', value: 'get nekopara character detail and will cause story spoil' },
                { name: 'cavatar <avatar>', value: 'check someone avatar in circle form' },
                { name: 'coinflip', value: 'choose head or tail and see the result' },
            )

        const embed3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 3')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'coinflip2', value: 'bot flip the coin and show the result' },
                { name: 'congrats', value: 'congrats someone' },
                { name: 'cringe', value: 'what things fxxking cringe?' },
                { name: 'ctb <osu username>', value: 'check the detail for that username in catch the beat mode' },
                { name: 'cute', value: 'praise Vanilla' },
                { name: 'deepfry <username>', value: 'deepfry someone' },
                { name: 'ed', value: 'check all the nekopara ending songs' },
                { name: 'emoji', value: 'check server emoji' },
                { name: 'emojify <text>', value: 'emojify your text' },
                { name: 'fact', value: 'get a fact about something' },
            )

        const embed4 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 4')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'fasttype', value: 'play a fasttype game yourself' },
                { name: 'fight <username>', value: 'fight someone' },
                { name: 'fire <username>', value: 'generate a fire meme for the user you mentioned' },
                { name: 'game <ttt/connectfour/hangman/snakegame/fasttyper/guessnumber/rps>', value: 'play the game with others, ttt is tictactoe and rps is rock paper scissors'},
                { name: 'gayrate', value: 'check your gay rate' },
                { name: 'google', value: 'search a things and give you link' },
                { name: 'guess', value: 'guess a shuffle word' },
                { name: 'hack <username>', value: 'hack someone' },
                { name: 'help', value: 'check most of command of this bot with clearly detail' },
                { name: 'help2', value: 'show all command without detail except urban command' },
            )

        const embed5 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 5')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'hentai', value: 'who is hentai? report him!' },
                { name: 'hitler <username>', value: 'generate a hitler meme for the user you mentioned' },
                { name: 'image <content or link>', value: 'search and send the image you want in channel' },
                { name: 'invert <username>', value: 'invert someone avatar' },
                { name: 'invite <username>', value: 'check the invite information about the user you mentioned' },
                { name: 'jail <username>', value: 'generate a jail meme for the user you mentioned' },
                { name: 'joke', value: 'get a funny joke?' },
                { name: 'joke2', value: 'get a funny joke?' },
                { name: 'jumble', value: 'guess a harder shuffle word'},
                { name: 'kannapaper <text>', value: 'generate a kannapaper meme with the text given' },
            )

        const embed6 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 6')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'love <first username> <second username>', value: 'generate a meme between first person and second person' },
                { name: 'lyric <artist>', value: 'after typing this command type the song you want search without prefix to search the song you want' },
                { name: 'mania <osu username>', value: 'check the detail for that username in mania mode' },
                { name: 'math <power/root> <first number> <second number>', value: 'calculate harder operation between first number and second number' },
                { name: 'maw', value: 'get a mobile phone anime wallpaper' },
                { name: 'mcserver <ip> <port>', value: 'check minecraft server detail' },
                { name: 'membercount', value: 'show the server got how many member include bot' },
                { name: 'meme', value: 'get a meme' },
                { name: 'mh', value: 'get music command list' },
                { name: 'mjl', value: 'check member joined position' },
            )

        const embed7 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 7')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'neko', value: 'get a neko picture' },
                { name: 'neko2', value: 'get a neko picture' },
                { name: 'neko3', value: 'get a neko picture' },
                { name: 'nsfwhelp', value: 'get a nsfw command list' },
                { name: 'numberguess', value: 'guess a number between 1 to 100' },
                { name: 'op', value: 'check all nekopara opening song' },
                { name: 'osu <osu username>', value: 'check the detail for that username in circle mode' },
                { name: 'percentage <amount> <maximum>', value: 'calculate the percentage according to query given' },
                { name: 'perms <username>', value: 'check someone permissions in current server' },
                { name: 'phcomment <username> <text>', value: 'help someone give some comment in a place' },
            )

        const embed8 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 8')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'ping', value: 'check the bot latency and api ping' },
                { name: 'playlist', value: 'check the music playlist' },
                { name: 'pokedex', value: 'check the pokemon infomation about the value and skill for battle'},
                { name: 'pokemon <pokemon name>', value: 'check the pokemon detail' },
                { name: 'quote <username> <text>', value: 'generate a quote' },
                { name: 'rainbow <username>', value: 'let someone avatar become rainbow' },
                { name: 'report <bug>', value: 'report bug to owner of this bot' },
                { name: 'rip <username>', value: 'generate a rip meme for the user you mentioned' },
                { name: 'roast <username>', value: 'insult someone' },
                { name: 'roblox <username>', value: 'Check a roblox user detail' },
            )

        const embed9 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 9')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'rolemember <role>', value: 'Check the member contain in the role you mentioned' },
                { name: 'roleinfo <role>', value: 'Check the role information' },
                { name: 'roll <dice sides>', value: 'Rolls a dice with the specified number of sides, if no number given will set to 6 sides' },
                { name: 'rps', value: 'play rock paper scissors with bot' },
                { name: 'rt <text>', value: 'reverse text' },
                { name: 'say <text>', value: 'let bot help you say something' },
                { name: 'serveravatar', value: 'get server avatar' },
                { name: 'serverinfo', value: 'get info for this server' },
                { name: 'sexyrate', value: 'check your sexy rate' },
                { name: 'ship <first username> <second username>', value: 'combine the two name together' },
            )

        const embed10 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 10')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'silence', value: 'who too noisy? tell him to shut up' },
                { name: 'slap <first username> <second username>', value: 'generate a meme that someone slap someone' },
                { name: 'slot', value: 'open a slot and test your luck' },
                { name: 'snipe', value: 'show the previous deleted message' },
                { name: 'spotify <username>', value: 'check someone spotify information if they are playing spotify music in computer' },
                { name: 'stats', value: 'show the client and server stats' },
                { name: 'status <username>', value: 'show someone status detail' },
                { name: 'tabbleflip', value: 'animated table flip' },
                { name: 'taiko <osu username>', value: 'check the detail for that username in taiko mode' },
                { name: 'text <text>', value: 'text your text into some funny shape' },
            )

        const embed11 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 11')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'textflip <text>', value: 'flip your text' },
                { name: 'tictactoe <username>', value: 'play tictactoe with the person you want' },
                { name: 'tbc <username>', value: 'generate a to be continued meme for the user you mentioned' },
                { name: 'toxic', value: 'TOXIC gif!!!' },
                { name: 'translate <language> <text>', value: 'translate text to language you want' },
                { name: 'trash <username>', value: 'generate a trash meme for the user you mentioned' },
                { name: 'trigger <username>', value: 'generate a trigger gif for the user you mentioned' },
                { name: 'trivia', value: 'answer some trivia' },
                { name: 'tweet <username> <text>', value: 'generate a tweet picture that contain the text you given' },
                { name: 'uptime', value: 'Show the running time of the bot' },
            )

            const embed12 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help List Page 12')
            .setDescription('Type v <command> or V <command> to use me!')
            .setFooter('Type number in chat can flip the help list to that number of page quickly!')
            .addFields(
                { name: 'userinfo <username>', value: 'check someone info' },
                { name: 'wanted <username>', value: 'generate a wanted meme for the user you mentioned' },
                { name: 'wasted <username>', value: 'generate a wasted meme for the user you mentioned' },
                { name: 'weather <city>', value: 'check city weather and more info' },
                { name: 'wiki <query>', value: 'search somethings with clearly detail and contain picture' },
                { name: 'wikipedia <query>', value: 'search something with all detail that wikipedia contain' },
                { name: 'weatherclock', value: 'check the world timezone' },
                { name: 'yt <link or name>', value: 'check youtube video according your link or video name' },
            )

        const pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10, embed11, embed12];
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

