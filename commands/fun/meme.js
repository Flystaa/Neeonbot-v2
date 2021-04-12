const https = require('https');
const Discord = require('discord.js');
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'
const caturl = 'https://www.reddit.com/r/cats/hot/.json?limit=100'

module.exports = {
    name: 'meme',
    aliases: ["reddit", "neeonmemes", "neeonreddit"],
    description: 'sendet memes',
    cooldown: 60,
    args: true,
    usage: '<memes, cats>',
    execute(message, args, cleint) {
        if (args[0] === 'memes') {
        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {

                    var text = index.selftext
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    const textembed = new Discord.RichEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Es gab einen Fehler: ', e)
            })
        })
        }
        else if (args[0] === 'cats') {
            https.get(caturl, (result) => {
                var body = ''
                result.on('data', (chunk) => {
                    body += chunk
                })
    
                result.on('end', () => {
                    var response = JSON.parse(body)
                    var index = response.data.children[Math.floor(Math.random() * 99) + 1].data
    
                    if (index.post_hint !== 'image') {
    
                        var text = index.selftext
                        const textembed = new Discord.MessageEmbed()
                            .setTitle(subRedditName)
                            .setColor(9384170)
                            .setDescription(`[${title}](${link})\n\n${text}`)
                            .setURL(`https://reddit.com/${subRedditName}`)
    
                        message.channel.send(textembed)
                    }
    
                    var image = index.preview.images[0].source.url.replace('&amp;', '&')
                    var title = index.title
                    var link = 'https://reddit.com' + index.permalink
                    var subRedditName = index.subreddit_name_prefixed
    
                    if (index.post_hint !== 'image') {
                        const textembed = new Discord.RichEmbed()
                            .setTitle(subRedditName)
                            .setColor(9384170)
                            .setDescription(`[${title}](${link})\n\n${text}`)
                            .setURL(`https://reddit.com/${subRedditName}`)
    
                        message.channel.send(textembed)
                    }
                    const imageembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setImage(image)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})`)
                        .setURL(`https://reddit.com/${subRedditName}`)
                    message.channel.send(imageembed)
                }).on('error', function (e) {
                    console.log('Es gab einen Fehler: ', e)
                })
            })
        }
        else if (args[0]) {
            message.channel.send(`Dieses Argument steht nichts zur Verfügung, ${message.author}! Versuchen sie bitte eins der folgenden: \`<memes, cats>\` `);
        }   
    },
}