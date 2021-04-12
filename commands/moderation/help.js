module.exports = {
	name: 'neeonhelp',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands', 'help', 'neeon'],
	cooldown: 5,
	execute(message, args) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Neeon Befehlsliste', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png', 'https://ask.neeonbot.eu')
        .addFields(
            { name: '👑!avatar👑', value: 'lässt Neeon den Avatar des gepingten Nutzers als PNG zeigen!', inline: true},
            { name: '📋!credits📋', value: 'Wissenswertes über Neeon und dessen ersteller!', inline: true },
            { name: '⛑️!neeonhelp⛑️', value: 'Die gesamte Neeon Befehlsliste mit allem drum und dran!', inline: true },
            { name: '🗑️!clearchat🗑️', value: 'Entfernt je nach Eingabe (1-99) Nachrichten!', inline: true },
            { name: '📯!neeonlogs📯', value: 'Alles zu neues Features, Updates und Änderungen!', inline: true },
            { name: '🛰️!ticket🛰️', value: '[WiP] Ein Ticket Support System!', inline: true},
            { name: '📜!serverinfo📜', value: 'Wissenswertes zu ihren Server, direkt über diesen Befehl!', inline: true},
            { name: '💼!getbot💼', value: 'Bekomme Neeon auch für deinen eigenen Server!', inline: true },
            { name: '🦆!fakten🦆', value: 'Informative und witzige Fakten rund um Gott und die Welt!', inline: true },
            { name: '👻!ghostping👻', value: '[WiP] Pingt alle deine Servermitglieder und löscht deine Nachricht... MUHAHAHAHA!!!!!', inline: true},
            { name: '🐙!roll🐙', value: '[WiP] Sendet eine zufällige Zahl zwischen 1-10 in den Chat!', inline: true },
            { name: '🛡️!neeoncontact🛡️', value: '[WiP] Sammelt die Kraft der Welt auf, um die Macht zu haben eine Nachricht an die heiligen Developer zu senden!', inline: true }
        )
        .setTimestamp()
        .setFooter('🍪liebt Kekse🍪', 'https://i.ibb.co/j3vbZ8p/Neeonv2-Discord-New.png');

        message.channel.send(embed);
	},
};