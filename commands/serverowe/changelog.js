
const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: "changelog",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) 
            return message.reply("Nie masz uprawnień do użycia tej komendy!");
            if (args[0]){
        const embed = new Discord.MessageEmbed()
            .setDescription(args.slice(0).join(" "))
            .setTitle(`CHANGELOG`)
            .setFooter(`Wywołane przez: ${message.author.username}`, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
            .setColor(config.colorofbot)
            .setTimestamp()
            message.channel.send(embed)
        }else{ // Brak pierwszego arg
            const embed = new Discord.MessageEmbed()
            .setTitle("BŁĄD")
            .setDescription(`**${message.author.username}** Podaj treść changelogu`)
            .setFooter(`Wywołane przez: ${message.author.username}`, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
            .setColor(config.colorofbot)
            .setTimestamp()
            message.channel.send(embed)}
    }
}
