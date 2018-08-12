const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("--")

bot.on('ready', function() {
    client.user.setActivity(`|En codage|Heberger 24h/24|Erwan_ Mon maitre`);
    console.log("Connected");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "test"){
        message.channel.sendMessage("test reusi");
    }

 

});
