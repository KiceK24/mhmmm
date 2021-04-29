
const Discord = require("discord.js");
const client = new Discord.Client();
const path = require('path');
config = require(path.join(__dirname, '../../config/config.js'));


module.exports = {
    name: "verify",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed() 
            .setTitle(`WERYFIKACJA`)
            .setDescription(`**${message.author.username}** Zostales Zweryfikowany`)
            .setFooter(`Wywołane przez: ${message.author.username}`, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
            .setColor(config.colorofbot)
            .setTimestamp()
            message.channel.send(embed)
            message.member.roles.add(config.weryfikacjarola)

   }
}
