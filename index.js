
const Discord = require("discord.js");
const client = new Discord.Client();
const { readdirSync } = require("fs");
const ip = require(`./config/config.js`).ip
const FiveM = require("fivem")
const srv = new FiveM.Server(ip) 
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const path = require('path');
config = require(path.join(__dirname, 'config/config.js'));
const nameofbot = config.nameofbot

// Oh daddy
readdirSync("./handlers/").forEach(handler => {
    if (!handler.endsWith(".handler.js")) return;
    require(`./handlers/${handler}`)(client);
});


// Tfuj stary
client.on('ready', () => {
    console.log(`AndN#3065`);
    console.log(`mhm`);
    setInterval(function(){
    }, config.refreshInteval)
});

// Status - Funkcja z innego bocika jak cos 
setInterval( async () => {
    let i = 0
    const srvx = new FiveM.Server(ip)
    const osoby = await srvx.getPlayers().catch(error => {i++})
    if(i === 1){
        const presenceOptions = {
            activity: {
                type: `PLAYING`,
                name: `Server OFF`,}}
        client.user.setPresence(presenceOptions)
    } else {
        const max = await srvx.getMaxPlayers().catch(error => {})
        const presenceOptions = {
            activity: {
                type: `PLAYING`,
                 name: `${nameofbot}: ${osoby} online`,}}
        client.user.setPresence(presenceOptions)}}, 
        config.refreshInteval)

// wzmianka
client.on('message', message => {  
    const wzmianka = [`<@!${client.user.id}>`, `<@${client.user.id}>`]
    for (o=0;o<=wzmianka.length;o++){
    if (message.content == wzmianka[o]) {
    const embed = new Discord.MessageEmbed()
    .setDescription(`Siemka jestem botem stworzonym przez **AndN#3065**`)
    .setFooter(`Wywołane przez: ${message.author.username}`, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
    .setColor(config.colorofbot)
    .setTimestamp()
    message.channel.send(embed)}}});

client.login(config.token);

