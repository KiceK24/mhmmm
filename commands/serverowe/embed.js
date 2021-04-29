
const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: "embed",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) 
        return message.reply("Nie masz uprawnień do użycia tej komendy!");
        if (args[0]){
        if (args[1]){
        const embed = new Discord.MessageEmbed()
            .setDescription(args.slice(1).join(" "))
            .setTitle(args[0])
            .setFooter(`Wywołane przez: ${message.author.username}`, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
            .setColor(config.colorofbot)
            .setTimestamp()
            message.channel.send(embed)
        }else{ // Brak drugiego arg
            const embed = new Discord.MessageEmbed()
            .setTitle("BŁĄD")
            .setDescription(`**${message.author.username}** Podaj treść embeda`)
            .setFooter(`Wywołane przez: ${message.author.username}`, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
            .setColor(config.colorofbot)
            .setTimestamp()
            message.channel.send(embed)}
        }else{ // Brak pierwszego arg
            const embed = new Discord.MessageEmbed()
            .setTitle("BŁĄD")
            .setDescription(`**${message.author.username}** Podaj tytuł embeda`)
            .setFooter(`Wywołane przez: ${message.author.username}`, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
            .setColor(config.colorofbot)
            .setTimestamp()
            message.channel.send(embed)}
    }
}
