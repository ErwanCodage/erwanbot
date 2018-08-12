const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const fs = require('fs');
const { version } = require("discord.js");
const moment = require("moment");
//const https = require('https');
//const fnt = require ('fortnitetracker-7days-stats') ;   

client.on("ready", () => {
	

	 // |
    //| --help | ${client.guilds.size} servers | ${client.users.size} users |
	
  client.user.setActivity(`|En codage`);
  
  console.log(`------------------------------`)
  console.log(`|${client.guilds.size} servers|`)
  console.log(`|${client.users.size} users   |`)
  console.log(`|Versions 0.05                |`)
  console.log(`------------------------------`);
	
	 
 
});

 
client.on('message', message => {

  let cooldown = new Set();
	var msg = message
	var prefix = '--'
    var sender = message.author;
    var owner = message.guild.owner.user || {};
//    var points = JSON.parse(fs.readFileSync('C:\\Users\\Erwan\\Desktop\\Erwan.Bot\\point.json', 'utf8'));
    var sender1 = message.author
    var msg1 = message.content.toUpperCase();
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);
  //  var userData = JSON.parse(fs.readFileSync('C:\\Users\\Erwan\\Desktop\\Erwan.Bot\\userData.json','utf8'));
















  
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member1 = message.guild.member(user)

  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()

	
   
  
  
  
  
  if (message.content === '--test') {
    message.channel.send(`${user.username}#${user.discriminator}\n${user.id}\n${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')} \n${moment.utc(member1.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}\n${user.bot}`)
   
  }
 
  if (message.content === '--ping') {
   message.channel.send(`**${message.author.username} Pong! \nLa latence est** ${msg.createdTimestamp - message.createdTimestamp}ms.** La latence de l'API est **${Math.round(client.ping)}ms `)
   
  }






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


 
  
    

 
	   
	   
   

      
      
	  

    
	 // if (message.content === '--test') {
   // message.channel.send(`${user.username}#${user.discriminator}\n${user.id}\n${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')} \n${moment.utc(member1.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}\n${user.bot}`)
   
  



  
});
	



	

//https://discordapp.com/oauth2/authorize?client_id=468140538537967626&scope=bot&permissions=14
//v${version}
//cd desktop/discord
//node V_Erwan_Bot.js
client.login('NDY4MTQwNTM4NTM3OTY3NjI2.Di49Gw._SlpwQY-RWE9r1hn5iBCs_r4NmE');
