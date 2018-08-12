const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("--")

bot.on('ready', function() {
	bot.user.setgame("Cool jsui heberger!")
	console.log("Conections en cour")
	console.log("Chargement")
	console.log("0%")
	console.log("10%")
	console.log("20%")
	console.log("30%")
	console.log("100%")
});

bot.login('NDY4MTQwNTM4NTM3OTY3NjI2.Di49Gw._SlpwQY-RWE9r1hn5iBCs_r4NmE');

bot.on('message', message => {

  if (message.content === '--ping') {
   message.channel.send(`**${message.author.username} Pong! \nLa latence est** ${msg.createdTimestamp - message.createdTimestamp}ms.** La latence de l'API est **${Math.round(client.ping)}ms `)
   
  }

});
