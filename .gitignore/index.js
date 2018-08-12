const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("--")

bot.on('ready', function() {
	bot.user.setActivity(`jsui heberger Cool`);
	console.log("Conections en cour")
});

bot.login('NDY4MTQwNTM4NTM3OTY3NjI2.Di49Gw._SlpwQY-RWE9r1hn5iBCs_r4NmE');

bot.on('message', message => {

   if (message.content === prefix + "ping"){
   message.channel.send("est non je tes troll xD")
   
  }

if (message.content === prefix + "flip") {
    	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		bot.reply(message, "Face (1)");
    	} else if (result == 2) {
    		bot.reply(message, "Pile (2)");
    	}
    }

});
