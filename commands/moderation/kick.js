const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const permissions = new Permissions([
    'KICK_MEMBERS',
]);
module.exports = {
    name: 'kick',
    description: "Kickt einen Nutzer",
    cooldown: 5,
    args: true,
    usage: '<@Benutzer>',
    execute(message, args){
        if (message.channel.type === 'dm') {
            message.channel.send('Neeon Polizei hier! Sie müssen diesen Befehl auf einem Server ausführen!')
        }
        else {
        const sender = message.member
        const taggedUser = message.mentions.users.first();
        if (sender.hasPermission('KICK_MEMBERS')) {
        const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send(`${taggedUser.username} wurde gekickt!`)
            }else{
                message.channel.send(`${taggedUser.username} konnte nicht gekickt werden!`)
            }}
            else {
             message.channel.send(`Sie sind nicht berechtigt ${taggedUser.username} zu kicken!`)
         }
        }
    }
}
