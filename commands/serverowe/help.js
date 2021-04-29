
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = config.prefix

module.exports = {
    name: "help",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .addFields(
            { name: `Gracz`, value: `${prefix}status`, inline:true },
            { name: `Administrator`, value: `${prefix}embed\n${prefix}changelog`, inline:true },
        )
            .setTitle("POMOC")
            .setFooter(`Wywołane przez: ${message.author.username}`, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
            .setColor(config.colorofbot)
            .setTimestamp()
            message.channel.send(embed)
    }
}
