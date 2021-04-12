const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Object()
module.exports = {
	name: 'neeoncontact',
	description: 'Kontaktiere die Neeon Developer!',
    aliases: ['dev', 'neeondev', 'neeonidea'],
	cooldown: 15000,
    args: true,
    usage: '<text>',
	execute(message, args) {
        message.channel.send(`${message.author} reagieren sie mit "✅", wenn sie "${args}" an die Neeon Developer senden möchten, achtung hierbei wird ihr Discord Tag mit an die Developer gesendet!`); 
        message.react('✅').then(() => message.react('❌'));
        const filter = (reaction, user) => {
            return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
        
                if (reaction.emoji.name === '✅') {
                    const neeonsend = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(`"${args}" wird an die Neeon Developer gesendet!`)
                    .setTimestamp()
                    .setFooter('⛑️Neeon Contact⛑️', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');	
                    message.reply(neeonsend)
                    console.log(`${message.author} sendet "${args}" an die Neeon Developer!`)
                }

                else {
                    message.channel.send('Ihr Antrag wurde abgebrochen!')
                }
            })

       .catch(collected => {
         message.channel.send('⛔Sie haben nichts angekreuzt. Hiermit verfällt ihr Antrag!⛔')
         });
	},
};