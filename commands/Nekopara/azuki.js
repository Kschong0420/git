const paginationEmbed = require("discord.js-pagination")

module.exports = {
  name: 'azuki',
  description: 'Azuki self introduction!',
  cooldown: 45,
  usage: 'azuki',
  category: 'Nekopara',
  async execute (client, message, args, Discord) {
    const embed1 = new Discord.MessageEmbed()
    .setTitle('Azuki')
    .setThumbnail('https://static.wikia.nocookie.net/nekopara/images/5/51/Ch_azu_img_01.png/revision/latest/scale-to-width-down/228?cb=20200519140801')
    .setDescription(`[Click me to see Azuki's Self Introduction](https://youtu.be/yH4R0MwExvo)\nAzuki (アズキ Azuki) is the eldest of the Minaduki catgirls. She is fearless and easygoing. Azuki never hides her nature. She’s not afraid to voice her mind, often with a few uncouth words. Most tasks are a nuisance to her at best, leaving her with little motivation to do anything. She is actually quite capable, though, and can do almost anything if put to work (aside from physical labor). She has a complex about her body size, however. Never, ever mention “short legs” around her.`)
    .addField('Appearance', 'Contrary to her age, Azuki is the second shortest of the Minaduki catgirls as well as the most youthful in appearence due to her Munchkin traits; this is in stark contrast to Coconut who is the third youngest, but appears to be one of the oldest. She has brown neck-length hair tied up by two cat-themed hair clips into small twin tails on the opposite sites of her head. She has brown eyes, and a striped tail.\nHer casual attire consists of a Sailor suit-style white sleeveless buttoned shirt with blue collar and a red ascot. She wears a blue pleated skirt, and black Mary Jane shoes with white ankle socks. Her gold bell is hung from a red choker around her neck.')
    .addField('Personality', 'Azuki is one of the most responsible of the Minaduki catgirls, often acting as their supervisor when helping to run La Soleil. However her brash personality often sees her come to blows with her sisters, in particular Coconut. Deep down however, she cares about her family and their well-being, and checks on them even if she previously had a fight with them.\nAzuki fatal flaw is that she has trouble expressing her emotions or desires, which she hides behind her tsundere façade. Both Coconut and Vanilla have demonstrated the ability to see through this trait, at times forcing her to become honest with herself.\nAfter becoming Kashou\'s catpanion, she actively attempts to become more honest, this in turn causes her to get into less fights with her sisters.')
    const embed2 = new Discord.MessageEmbed()
    .setTitle('Azuki')
    .setThumbnail('https://static.wikia.nocookie.net/nekopara/images/5/51/Ch_azu_img_01.png/revision/latest/scale-to-width-down/228?cb=20200519140801')
    .setDescription('**Attributes**')
    .addField('Race', 'Catgirl', true)
    .addField('Breed', 'Munchkin Cat', true)
    .addField('Gender', 'Female', true)
    .addField('Age', '3 years', true)
    const embed3 = new Discord.MessageEmbed()
    .setTitle('Azuki')
    .setThumbnail('https://static.wikia.nocookie.net/nekopara/images/5/51/Ch_azu_img_01.png/revision/latest/scale-to-width-down/228?cb=20200519140801')
    .setDescription('**Characteristics**', '\u200B')
    .addField('Complexion', 'Pale', true)
    .addField('Height(Kid)', '142cm', true)
    .addField('Weight(Kid', '35.1kg', true)
    .addField('3 Size(Kid)', '69cm, 50cm, 72cm', true)
    .addField('Hair Colour', 'Brown', true)
    .addField('Eye Colour', 'Brown', true)
    .addField('Occupation', 'La Soleil employee', true)
    const embed4 = new Discord.MessageEmbed()
    .setTitle('Azuki')
    .setThumbnail('https://static.wikia.nocookie.net/nekopara/images/5/51/Ch_azu_img_01.png/revision/latest/scale-to-width-down/228?cb=20200519140801')
    .setDescription('**Relationships**', '\u200B')
    .addField('Maple', 'Younger Sister', true)
    .addField('Cinnamon', 'Younger Sister', true)
    .addField('Coconut', 'Younger Sister', true)
    .addField('Chocola', 'Younger Sister', true)
    .addField('Vanilla', 'Younger Sister', true)
    .addField('Shigure', 'Owner', true)
    .addField('Kashou', 'Owner, Partner and Catpanion', true)
    const embed5 = new Discord.MessageEmbed()
    .setTitle('Azuki')
    .addField('Trivia', '1.Azuki name is a transliteration of Adzuki beans, a type of small edible beans from eastern Asia. Her tail also sports similar colors to the brown variety of Adzuki beans.\n\n2.Azuki refers to the other catgirls by reordering/combining/shortening their names. She refers to Cinnamon as "Mon-Cinna", Maple as "Pull-May", Chocola and Vanilla as "ChocoVani", and lastly Coconut as "Nuts".\n\n3.Azuki is the first of Kashou catpanions to consistently call him by name, as Chocola and Vanilla refer to him as "Master" and Coconut preferring to call Kashou "Onii-chan".')
    .setThumbnail('https://static.wikia.nocookie.net/nekopara/images/5/51/Ch_azu_img_01.png/revision/latest/scale-to-width-down/228?cb=20200519140801')
    const embed6 = new Discord.MessageEmbed()
    .setTitle('Azuki')
    .setThumbnail('https://static.wikia.nocookie.net/nekopara/images/5/51/Ch_azu_img_01.png/revision/latest/scale-to-width-down/228?cb=20200519140801')
    .addField('Trivia', '4.Azuki has been shown to be easily manipulated by food, with Shigure being known to punish her by withholding snacks from her, Azuki meanwhile, sees this as "torture".\n\n5.Azuki is one of three of the Minaduki catgirls who hair color does not match the food item they are name after, having brown hair, while Adzuki beans being a red color.\n*The others being Cinnamon having violet colored hair, rather than being brown, as cinnamon commonly is, and Cacao being mint, instead of the orange-like color Cacao seeds have.*')
    const pages = [embed1, embed2, embed3, embed4, embed5, embed6]
    paginationEmbed(message, pages, ["◀", "▶"], 240000)
  }
}
