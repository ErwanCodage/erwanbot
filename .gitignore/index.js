const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("--")

bot.on('ready', function() {
    bot.user.setGame("Command: :help");
    console.log("Connected");
});

bot.login(TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "test"){
        message.channel.sendMessage("test reusi");
    }

 

});
