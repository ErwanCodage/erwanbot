const Discord = require('discord.js')
const bot = new Discord.Client();




var prefix = ("--")


bot.on('ready', function() {
	bot.user.setActivity(`Bot Heberger |En codage| Erwan_ mon maitre`);
	console.log("Conections en cour")
});

bot.login(process.env.TOKEN);

bot.on('message', message => {


   if (message.content === prefix + "botinfo"){
   message.channel.send(`Jai actuellement ${Math.round(client.ping)}ms est justilise ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB de ram`)

   }



});
