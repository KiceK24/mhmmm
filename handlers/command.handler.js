// RedLeaks discord.gg/49263TE8g8
// RedLeaks discord.gg/49263TE8g8

const { readdirSync } = require("fs");
const chalk = require("chalk");

module.exports = async client => {

    readdirSync("./commands/").forEach(dir => {
        readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js")).forEach(cmd => {
            const command = require(`../commands/${dir}/${cmd}`);
            if (!command.name) console.log(chalk.redBright(`Nie udało się załadować komendy ${cmd}`));
            else {
                client.commands.set(command.name, command);
                console.log(chalk.greenBright(`Załadowano komendę ${command.name}`));
                if (command.aliases && Array.isArray(command.aliases)) command.aliases.forEach(alias => client.aliases.set(alias, command.name));
            }
        });
    });
}

// RedLeaks discord.gg/49263TE8g8
// RedLeaks discord.gg/49263TE8g8