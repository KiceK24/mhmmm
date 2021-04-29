

exports.run = async (client, message) => {
    if (message.author.bot || !message.guild || !message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (!command) return message.reply("Nie znaleziono takiej komendy");
    else command.run(client, message, args);
}
