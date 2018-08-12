const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("--")


bot.on('ready', function() {
	bot.user.setActivity(`Bot Heberger |En codage| Erwan_ mon maitre`);
	console.log("Conections en cour")
});

bot.login('NDY4MTQwNTM4NTM3OTY3NjI2.Di49Gw._SlpwQY-RWE9r1hn5iBCs_r4NmE');

bot.on('message', message => {


  	   if(message.content == '--servinfo') {
 	
message.channel.send({embed: {
    color: 3248003,
    title: "Info du serveur",
    description: "Information du Serveur",
    fields: [{
        name: "Creations Du Serveur/Date",
        value: ` ${day}.${month}.${year} `
      },
	  {
        name: `Fondateur`,
        value:`${owner.username || 'None'} `
      },
	  
      {
        name: "Onligne-Total",
        value: `**     ${msg.guild.members.filter(m => m.presence.status !== 'offline').size}    /    ${msg.guild.memberCount}**`
      },
	   {
        name: "Channel",
        value:  `**${message.guild.channels.filter(chan => chan.type === 'voice').size} Vocal / ${message.guild.channels.filter(chan => chan.type === 'text').size} Textuel**`
      },
	  {
         name: 'Roles',
         value: `${msg.guild.roles.size}`,
       },
	   {
        name: `Regions`,
        value:`***${msg.guild.region}*** `
      }
	
	  
	]
	  
	  
   }
});  
  
	   }






 //  if (message.content === prefix + "ping"){
 //  message.channel.send(`**${message.author.username} Pong! \nLa latence est** ${msg.createdTimestamp - message.createdTimestamp}ms.** La latence de l'API est **${Math.round(client.ping)}ms`)
   
 // }

//if (message.content === prefix + "flip") {
  //  	var result = Math.floor((Math.random() * 2) + 1);
   // 	if (result == 1) {
   // 		bot.reply(message, "Face (1)");
   // 	} else if (result == 2) {
   // 		bot.reply(message, "Pile (2)");
    //	}
   // }

});
