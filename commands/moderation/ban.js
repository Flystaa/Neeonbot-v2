const { Permissions } = require('discord.js');
const Discord = require('discord.js');
const permissions = new Permissions([
    'BAN_MEMBERS',
]);
module.exports = {
    name: 'ban',
    description: "Bannt einen Nutzer",
    cooldown: 5,
    execute(message, args){
        const sender = message.member
        const taggedUser = message.mentions.users.first();
        if (sender.hasPermission('BAN_MEMBERS')) {
        const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send(`${taggedUser.username} wurde gebannt!`)
            }else{
                message.channel.send(`${taggedUser.username} konnte nicht gebannt werden!`)
            }}
            else {
             message.channel.send(`Sie sind nicht berechtigt ${taggedUser.username} zu bannen!`)
         }
    }
}
