module.exports = {
	name: 'unserinfo',
	aliases: ['me','meineinfo', 'ich'],
	description: 'Unserinfo!',
	cooldown: 5,
	execute(message, args) {
		const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`📋Informationen zu ${message.author.username}📋`)
            .setURL('https://neeonbot.eu')
            .setFooter('❤️We love you❤️', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png')
            .addFields({
              name: '🛠️User ID🛠️',
              value: `${message.author.id}`,
              inline: true
            }, {
              name: '📡Avatar📡',
              value: `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`,
              inline: true
            })
            .setTimestamp();
            message.channel.send(embed);
	},
};