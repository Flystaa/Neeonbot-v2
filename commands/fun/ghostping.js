const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'ghostping',
    description: "Sendet einen GhostPing!",
    cooldown: 5,
    execute(message, args){
        const sender = message.member
        if (sender.hasPermission('ADMINISTRATOR')) {
        message.channel.send(`@here @everyone GhostPing`).then(message.delete({ timeout: 1000 })).then(console.log('Jemand hat einen Ghost Ping genutzt, Spooky!')).catch(console.error);
        }else{
            message.channel.send('Das darfst du nicht!');
        }
    }
}