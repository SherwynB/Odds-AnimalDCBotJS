const Discord = require('discord.js');
const bot = new Discord.Client();
let prefix = '&ym';
const token = ~;
const fs = require ('fs');
const play = require('./commands/play');

bot.commands = new Discord.Collection();
var servers = {};

const commandFiles=fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', ()=>
{
    console.log('on');

})

bot.on('message', msg=>{
    if(msg.content=="ryle")
    {
        msg.reply('large');
    }
})

bot.on('message', msg=>{
    if(msg.content.startsWith(prefix+'e'))
    {     
          message = msg.content;
          yourString = message.replace ( /[^\d.]/g, '' );
          atDamaged=yourString*1.88*1.88*1.88*1.88;
          atPoor=yourString*1.88*1.88*1.88;
          atGood=yourString*1.88*1.88;
          atExcellent=yourString*1.88;
          msg.reply('At damaged mint=' + Math.round(atDamaged) +' \natPoor mint='+ Math.round(atPoor)+ '\nAt good mint=' +Math.round(atGood)+' \natExellent mint='+ Math.round(atExcellent));
    }
})

bot.on('message', msg=>{
    let args = msg.content.substring(prefix.length).split(" ");

    if(msg.content.startsWith(prefix+'dog'))
    {
        bot.commands.get('dog').execute(msg, args);
    }
})

bot.on('message', msg=>{
    let args = msg.content.substring(prefix.length).split(" ");

    if(msg.content.startsWith(prefix+'cat'))
    {
        bot.commands.get('cat').execute(msg, args);
    }
})

bot.on('message', msg=>{
    let args = msg.content.substring(prefix.length).split(" ");

    if(msg.content.startsWith(prefix+'play'))
    {
        bot.commands.get('play').execute(msg, args);
    }
})


bot.login(token);

