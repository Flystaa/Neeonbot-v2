module.exports = {
	name: 'TikTacToe',
	description: 'Tikky Takky Toe!',
    aliases: ['Tik', 'Tak', 'Toe', 'tik', 'tak', 'toe'],
	cooldown: 5,
	execute(message, args) {
		const messages = [
            "Tik",
            "Tak",
            "Toe"
		]
		const randomMessage = messages[Math.floor(Math.random() * messages.length)]
		message.channel.send(randomMessage)
	},
};