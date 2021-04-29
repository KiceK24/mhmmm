
const Discord = require("discord.js");
const client = new Discord.Client();
const path = require('path');
config = require(path.join(__dirname, '../../config/config.js'));
const FiveM = require("fivem")
const srv = new FiveM.Server(config.ip) 
const ipservera = config.ip
const nameofserver = config.nameofbot


module.exports = {
    name: "status",
    run: async (client, message, args) => {
        const gracze = await srv.getPlayers().catch(error => {i++})
        const maxgraczy = await srv.getMaxPlayers ().catch(error => {i++})
        const embed = new Discord.MessageEmbed() 
            .setTitle(`STATUS SERVERA`)
            .setDescription(`Nazwa: **${nameofserver}**\nIp: **${ipservera}**\nGracze **${gracze}**/**${maxgraczy}** `)
            .setFooter(`Wywołane przez: ${message.author.username}`, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
            .setColor(config.colorofbot)
            .setTimestamp()
            message.channel.send(embed)
    }
}
