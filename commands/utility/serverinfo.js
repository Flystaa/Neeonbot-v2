module.exports = {
	name: 'serverinfo',
	description: 'Serverinfo!',
	cooldown: 5,
	execute(message, args) {
			const Discord = require('discord.js');
			const embed = new Discord.MessageEmbed()
				.setColor("RANDOM")
				.setTitle(`📋 ${message.guild}'s Basic informationen 📋`)
				.setURL('https://twentydollarstudios.de')
				.setDescription(`>Angefordert von: ${message.author}<`)
				.setFooter('Neeon Information BETA', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png')
				.addFields({
				  name: '⚔️Inhaber⚔️',
				  value: `Der Inhaber des Servers ist ${message.guild.owner}.`,
				  inline: true
				}, {
				  name: '👥Mitglieder👥',
				  value: `Dieser Server hat ${message.guild.memberCount} Mitglieder.`,
				  inline: true
				}, {
				  name: '🦆Emoji Count🦆',
				  value: `Dieser Server hat ${message.guild.emojis.cache.size} Emojis`,
				  inline: true
				}, {
				  name: '🍁Roles Count🍁',
				  value: `Dieser Server hat ${message.guild.roles.cache.size} Rollen`,
				  inline: true
				}, {
					name: '📡Server ID📡',
					value: `Dieser Server hat die ID: ${message.guild.id}`,
					inline: true
				}, {
					name: '⚒️Regel Kanal⚒️',
					value: `Der Regel Kanal dieses Servers heißt: ${message.guild.rulesChannel}.`,
					inline: true
				}, {
					name: '🌎Region🌎',
					value: `Dieser Server läuft auf ${message.guild.region} Serverm!`,
					inline: true
				}, {
					name: '📜Erstellungsdatum📜',
					value: `Dieser Server wurde am ${message.guild.createdAt} erstellt!`,
					inline: true
				}, {
					name: '⚠️Maximum Members⚠️',
					value: `Dieser Server kann maximal ${message.guild.maximumMembers} Mitglieder haben!`,
					inline: true
				  })
				
				.setTimestamp();
	
			  message.channel.send(embed);
	},
};