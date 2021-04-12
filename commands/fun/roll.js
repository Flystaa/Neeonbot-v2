const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Object()

module.exports = {
	name: 'roll',
	description: 'Rolle eine random Zahl!',
    aliases: ['rolling', 'würfeln', 'würfel'],
	cooldown: 5,
		execute(message, args) {
				roll01 = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('\u200B')
				.setThumbnail('https://cdn.icon-icons.com/icons2/390/PNG/512/dice-six-faces-one_39564.png')
				.addFields(
					{ name: 'Du hast eine 1 gewürfelt!', value: '\u200B' }
					)
				.setTimestamp()
				.setFooter('Neeon v2', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');	

				roll02 = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('\u200B')
				.setThumbnail('https://cdn.icon-icons.com/icons2/390/PNG/512/dice-six-faces-two_38562.png')
				.addFields(
					{ name: 'Du hast eine 2 gewürfelt!', value: '\u200B' },
				)
				.setTimestamp()
				.setFooter('Neeon v2', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');	
				
				roll03 = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('\u200B')
				.setThumbnail('https://cdn.icon-icons.com/icons2/390/PNG/512/dice-six-faces-three_39562.png')
				.addFields(
   					 { name: 'Du hast eine 3 gewürfelt!', value: '\u200B' },
				)
				.setTimestamp()
				.setFooter('Neeon v2', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');

				roll04 = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('\u200B')
				.setThumbnail('https://cdn.icon-icons.com/icons2/390/PNG/512/dice-six-faces-four_38563.png')
				.addFields(
   						{ name: 'Du hast eine 4 gewürfelt!', value: '\u200B' },
					)
				.setTimestamp()
				.setFooter('Neeon v2', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');

				roll05 = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('\u200B')
				.setThumbnail('https://cdn.icon-icons.com/icons2/390/PNG/512/dice-six-faces-five_39565.png')
				.addFields(
   						{ name: 'Du hast eine 5 gewürfelt!', value: '\u200B' },
					)
				.setTimestamp()
				.setFooter('Neeon v2', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');

				roll06 = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('\u200B')
				.setThumbnail('https://cdn.icon-icons.com/icons2/390/PNG/512/dice-six-faces-six_39563.png')
				.addFields(
   						{ name: 'Du hast eine 4 gewürfelt!', value: '\u200B' },
					)
				.setTimestamp()
				.setFooter('Neeon v2', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');
				
				var messages = [	
				    roll01,
					roll02,
					roll03,
					roll04,
					roll05,
					roll06,
				]
				const randomMessage = messages[Math.floor(Math.random() * messages.length)]
				message.channel.send(randomMessage)
			},
		};