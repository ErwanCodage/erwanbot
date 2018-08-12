const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("--")


bot.on('ready', function() {
	bot.user.setActivity(`Bot Heberger |En codage| Erwan_ mon maitre`);
	console.log("Conections en cour")
});

bot.login('NDY4MTQwNTM4NTM3OTY3NjI2.Di49Gw._SlpwQY-RWE9r1hn5iBCs_r4NmE');

bot.on('message', message => {



if(message.content == '--botinfo') {

	
    message.channel.send({embed: {
        color: 9247003,
        title: "Information",
        description: "Information de Erwan.Bot ",
        fields: [{
            name: `***:robot:Nom***`,
            value:`Erwan.Bot `
          },
        {
                    name: ':desktop: Servers',
                    value: `${client.guilds.size.toLocaleString()}`,
          },
         {
                    name: ':baby: Users',
                    value: `${client.guilds.reduce((mem, g) => mem += g.memberCount, 0)}`,
           },
        {
                    name: ':keyboard: Channels',
                    value: `${client.channels.size.toLocaleString()}`,
          },
        {
                    name: ':ping_pong:Ping',
                    value: `${client.ping.toFixed(0)}ms`,
          },
         {
                    name: ':computer:Discord.js Versions',
                    value: `v${version}`,
           },
          {
                    name: ':computer:Node.js Versions',
                    value: `${process.version}`,
           },
        {
                    name: ':thinking: RAM usage',
                    value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
          }
       
    
          
          
        
      ]
        
        
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
