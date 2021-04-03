module.exports = {
	name: 'boop',
	description: 'Boop!',
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Boop.');
	},
};