module.exports = {
	name: 'getbot',
	description: 'Wo bekommt man den Neeon bot?',
	cooldown: 5,
	execute(message, args) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`📋Neeonbot.eu📋`)
            .setURL('https://neeonbot.eu')
          message.channel.send(embed);
	},
};