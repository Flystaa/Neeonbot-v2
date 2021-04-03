const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Object()
module.exports = {
	name: 'ticketopen',
    aliases: ['ticket', 'newticket', 'neeonticket', 'support', 'newsupport'],
	description: 'Öffnet ein Ticket!',
    scopes: ["identify", "guilds", "bot", "webhook.incoming", "guilds.join"],
	cooldown: 5,
	execute(message, args, member, guild) {
        message.react('🎟️').then(() => message.react('❌'));

        const filter = (reaction, user) => {
            return ['🎟️', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
        
                if (reaction.emoji.name === '🎟️') {
                    const ticketopen1 = new Discord.MessageEmbed()
                    .setTitle(`⚙️Ihr Ticket wird nun erstellt, bitte haben sie etwas Geduld!⚙️`)
                    message.reply(ticketopen1)
                    var channelName = ('Ticket ' + Math.floor(Math.random() * 999) + 1)
                    message.guild.channels.create(channelName, {
                        type: "text", 
                        permissionOverwrites: [
                           {
                             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                             id: message.author,               
                           }, {
                            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                            id: message.guild.roles.everyone,
                           }
                        ],
                      }).then(channel => channel.send("Hello!"))

                    } else {
                    const ticketdecline = new Discord.MessageEmbed()
                    .setTitle(`✂️Ihr Ticket wird nun vernichtet✂️`)
                    message.channel.send(ticketdecline);
                    message.delete({ timeout: 5000 })
                }
            })
//        .catch(collected => {
//           const reply = new Discord.MessageEmbed()
//          .setTitle(`⛔Sie haben nichts angekreuzt. Ihr Ticket ist nun Ungültig!⛔`)
//             message.reply(reply);
//         });

            
//            const ticketclose = new Discord.MessageEmbed()
//            .setTitle(`🦺Reagieren sie mit "🔥" wenn sie ihr Ticket schließen möchten.🦺`)
//            message.channel.send(ticketclose).then(message.react('🔥'))              
//            if (reaction.emoji.name === '🔥') {
//              message.guild.channels.delete(channelName)
//            }
	},
};