module.exports = {
	name: 'credits',
	description: 'Neeon Credits!',
	cooldown: 5,
	execute(message, args) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`📋Credits📋`)
            .setURL('https://twentydollarstudios.de')
            .setFooter('❤️Mit liebe gemacht❤️', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png')
            .addFields({
              name: '🐝Ersteller🐝',
              value: `Flystaa#0204`,
              inline: true
            }, {
                name: '🦆Helfende Hand🦆',
                value: `Entytaiment25#0505`,
                inline: true
            }, {
              name: '💪Tester💪',
              value: `xXSilentDeathXx777#6219`,
              inline: true
            }, {
                name: '📡Webseite📡',
                value: `Neeonbot.eu`,
                inline: true
            }, {
                name: '🚀Sponsor🚀',
                value: `TwentyDollarStudios.de`,
                inline: true
            }, {
                name: '🛠️Aktuelle Version🛠️',
                value: `Dev. Build 2.1.0b`,
                inline: true
            })
            
            .setTimestamp();

          message.channel.send(embed);
    },
};