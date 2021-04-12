module.exports = {
	name: 'avatar',
	description: 'avatar!',
    aliases: ['icon', 'pfp'],
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Ihr Avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s Avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>, dies könnte ein geschütztes Bild sein. Neeon nimmt keine Haftung für kopierte Avatare!`;
        });
        message.channel.send(avatarList);
	},
};