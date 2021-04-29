// RedLeaks discord.gg/49263TE8g8
// RedLeaks discord.gg/49263TE8g8

const { readdirSync } = require("fs");
const chalk = require("chalk");

module.exports = async client => {

      readdirSync("./events/").filter(f => f.endsWith(".js")).forEach(evnt => {

          const event = require(`../events/${evnt}`);
          console.log(chalk.greenBright(`Załadowano event ${evnt.split(".")[0]}`));

          client.on(evnt.split(".")[0], (...args) => event.run(client, ...args));
    });
}

// RedLeaks discord.gg/49263TE8g8
// RedLeaks discord.gg/49263TE8g8