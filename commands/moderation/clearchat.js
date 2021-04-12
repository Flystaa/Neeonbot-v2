module.exports = {
	name: 'clearchat',
	description: 'Cleaning!',
    aliases: ['clear', 'clean'],
	execute(message, args) {
        const amount = parseInt(args[0]) + 1;
        if (message.channel.type === 'dm') {
            message.channel.send('Neeon Polizei hier! Sie müssen diesen Befehl auf einem Server ausführen!')
        }
        else {
        if (isNaN(amount)) {
            return message.reply('Dies scheint keine anerkannte Nummer zu sein.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('Sie müssen eine Nummer zwischen 1 bis 99 eingeben.');
        }        
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('Es gab scheinbar einen Fehler beim entfernen der Nachrichten, dieses verdammte Internet!');
        });
       }
	},
};