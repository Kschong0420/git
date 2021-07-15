module.exports = {
    name: 'zodiac',
    description: 'Check Your zodiac symbol.',
    aliases: ["constellation"],
    usage: "zodiac <birth month> <birth date>",
    category: "Fun",
    async execute(client, message, args) {
        const month = parseInt(args[0]);
        const day = parseInt(args[1]);

        if (!month) {
            return message.lineReplyNoMention(' Please enter a valid number for month.');
        }

        if (month < 1 || month > 12) {
            return message.lineReplyNoMention(' Please enter a valid month.');
        }

        if (!day) {
            return message.lineReplyNoMention(' Please enter a valid number for day.');
        }

        if (month === 1) {
			if (day >= 1 && day <= 19) return message.lineReplyNoMention(' Your zodiac is **Capricorn** :capricorn:');
			if (day >= 20 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Aquarius** :aquarius:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 2) {
			if (day >= 1 && day <= 18) return message.lineReplyNoMention(' Your zodiac is **Aquarius** :aquarius:');
			if (day >= 19 && day <= 29) return message.lineReplyNoMention(' Your zodiac is **Pisces** :pisces:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 3) {
			if (day >= 1 && day <= 20) return message.lineReplyNoMention(' Your zodiac is **Pisces** :pisces:');
			if (day >= 21 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Aries** :aries:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 4) {
			if (day >= 1 && day <= 19) return message.lineReplyNoMention(' Your zodiac is **Aries** :aries:');
			if (day >= 20 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Taurus** :taurus:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 5) {
			if (day >= 1 && day <= 20) return message.lineReplyNoMention(' Your zodiac is **Taurus** :taurus:');
			if (day >= 21 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Gemini** :gemini:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 6) {
			if (day >= 1 && day <= 20) return message.lineReplyNoMention(' Your zodiac is **Gemini** :gemini:');
			if (day >= 21 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Cancer** :cancer:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 7) {
			if (day >= 1 && day <= 22) return message.lineReplyNoMention(' Your zodiac is **Cancer** :cancer:');
			if (day >= 23 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Leo** :leo:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 8) {
			if (day >= 1 && day <= 22) return message.lineReplyNoMention(' Your zodiac is **Leo** :leo:');
			if (day >= 23 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Virgo** :virgo:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 9) {
			if (day >= 1 && day <= 22) return message.lineReplyNoMention(' Your zodiac is **Virgo** :virgo:');
			if (day >= 23 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Libra** :libra:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 10) {
			if (day >= 1 && day <= 22) return message.lineReplyNoMention(' Your zodiac is **Libra** :libra:');
			if (day >= 23 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Scorpio** :scorpius:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 11) {
			if (day >= 1 && day <= 21) return message.lineReplyNoMention(' Your zodiac is **Scorpio** :scorpius:');
			if (day >= 22 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Sagittarius** :sagittarius:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else if (month === 12) {
			if (day >= 1 && day <= 21) return message.lineReplyNoMention(' Your zodiac is **Sagittarius** :sagittarius:');
			if (day >= 22 && day <= 31) return message.lineReplyNoMention(' Your zodiac is **Capricorn** :capricorn:');
			return message.lineReplyNoMention(' Please enter a valid date.');;
        } 
        else {
			return message.lineReplyNoMention(' Please enter a valid date.');;
		}
    }
}