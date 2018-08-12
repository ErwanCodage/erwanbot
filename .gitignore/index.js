const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("--")
var msg = message

bot.on('ready', function() {
	bot.user.setgame("Cool jsui heberger!")
	console.log("Conections en cour")
});

bot.login('NDY4MTQwNTM4NTM3OTY3NjI2.Di49Gw._SlpwQY-RWE9r1hn5iBCs_r4NmE');

bot.on('message', message => {

  if (message.content === prefix 'ping') {
   message.channel.send(`**${message.author.username} Pong! \nLa latence est** ${msg.createdTimestamp - message.createdTimestamp}ms.** La latence de l'API est **${Math.round(bot.ping)}ms `)
   
  }

});
