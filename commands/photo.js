const { MessageEmbed } = require('discord.js');
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;

module.exports = {
  name: 'photo',
  cooldown: 45,

  async execute (client, message, args) {
    const character = args.join(' ')
    if (!character) return message.channel.send('Please enter an character name!')

    if (character === 'azuki') {
        const azuki1 = new MessageEmbed()
        .setTitle('AZUKI')
        .setImage('https://static.wikia.nocookie.net/nekopara/images/5/51/Ch_azu_img_01.png/revision/latest/scale-to-width-down/228?cb=20200519140801')
        
        const azuki2 = new MessageEmbed()
        .setTitle('AZUKI')
        .setImage('https://static.wikia.nocookie.net/nekopara/images/7/71/Azuki-maid.png/revision/latest/scale-to-width-down/310?cb=20160108120914')

        const azuki3 = new MessageEmbed()
        .setTitle('AZUKI')
        .setImage('https://i.pinimg.com/originals/aa/39/7e/aa397eb77f54ce6310d2877246950b04.png')

        const azuki4 = new MessageEmbed()
        .setTitle('AZUKI')
        .setImage('https://c4.wallpaperflare.com/wallpaper/674/372/873/anime-nekopara-azuki-nekopara-wallpaper-preview.jpg')
        
        const azuki5 = new MessageEmbed()
        .setTitle('AZUKI')
        .setImage('https://cdn.myanimelist.net/images/characters/10/334161.jpg')

        const azuki6 = new MessageEmbed()
        .setTitle('AZUKI')
        .setImage('https://i.pinimg.com/736x/d1/2e/0b/d12e0b1f1432c45b2aeed59ca30b49f4.jpg')

        const azuki7 = new MessageEmbed()
        .setTitle('AZUKI')
        .setImage('https://i.pinimg.com/474x/18/16/f3/1816f30b8324c265c9d9fdd1e12c368a.jpg')

        const azuki8 = new MessageEmbed()
        .setTitle('AZUKI')
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAImBf3kP_Z9h9Tp3G4MIRq4EKbGBUQEkfw&usqp=CAU')

        const azuki9 = new MessageEmbed()
        .setTitle('AZUKI')
        .setImage('https://danbooru.donmai.us/data/original/fd/b2/fdb2c2455038a09bd0b09a653dbac76b.png')

        const azuki10 = new MessageEmbed()
        .setTitle('AZUKI')
        .setImage('https://i.pinimg.com/originals/a3/fe/de/a3fede5ca7b6c9b13605badb0fb355b9.jpg')

        const pages = [azuki1, azuki2, azuki3, azuki4, azuki5, azuki6, azuki7, azuki8, azuki9, azuki10];
        const emojis = ['◀', '▶'];

        ReactionPages(message, pages, true, emojis);
    }

    if (character === 'vanilla') {
        const vanilla1 = new MessageEmbed()
        .setTitle('VANILLA')
        .setImage('https://static.wikia.nocookie.net/nekopara/images/2/27/Ch_van_img_02.png/revision/latest/scale-to-width-down/310?cb=20200519141355')
        
        const vanilla2 = new MessageEmbed()
        .setTitle('VANILLA')
        .setImage('https://static.wikia.nocookie.net/nekopara/images/8/80/Ch_van_img_01.png/revision/latest/scale-to-width-down/310?cb=20200519141449')

        const vanilla3 = new MessageEmbed()
        .setTitle('VANILLA')
        .setImage('https://static.wikia.nocookie.net/nekopara/images/d/da/Vanilla_casual_dress.png/revision/latest/scale-to-width-down/180?cb=20200519141553')

        const vanilla4 = new MessageEmbed()
        .setTitle('VANILLA')
        .setImage('https://c4.wallpaperflare.com/wallpaper/689/641/79/anime-nekopara-vanilla-nekopara-wallpaper-preview.jpg')
        
        const vanilla5 = new MessageEmbed()
        .setTitle('VANILLA')
        .setImage('https://www.1999.co.jp/itbig68/10686137.jpg')

        const vanilla6 = new MessageEmbed()
        .setTitle('VANILLA')
        .setImage('https://www.gamegrin.com/assets/game/nekopara-vol-4-31/character-art/nekopara-vol--4-character-art-2.jpg')

        const vanilla7 = new MessageEmbed()
        .setTitle('VANILLA')
        .setImage('https://www.kindpng.com/picc/m/272-2728211_vanilla-nekopara-freetoedit-nekopara-hd-png-download.png')

        const vanilla8 = new MessageEmbed()
        .setTitle('VANILLA')
        .setImage('https://files.yande.re/sample/ef6c3199022cafefe17dbbd83e0d3cc2/yande.re%20710314%20sample%20animal_ears%20christmas%20game_cg%20neko_works%20nekomimi%20nekopara%20sayori%20vanilla.jpg')

        const vanilla9 = new MessageEmbed()
        .setTitle('VANILLA')
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOkHsSJ2liAlDssoTbvegztgwm-dAI1u6Zg&usqp=CAU')

        const vanilla10 = new MessageEmbed()
        .setTitle('VANILLA')
        .setImage('https://i.pinimg.com/474x/f3/09/2e/f3092e5237efeb0f5bf30dd87c9d97ee.jpg')

        const pages = [vanilla1, vanilla2, vanilla3, vanilla4, vanilla5, vanilla6, vanilla7, vanilla8, vanilla9, vanilla10];
        const emojis = ['◀', '▶'];

        ReactionPages(message, pages, true, emojis);
    }
  }
}
