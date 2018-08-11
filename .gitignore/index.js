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
    var points = JSON.parse(fs.readFileSync('C:\\Users\\Erwan\\Desktop\\Erwan.Bot\\point.json', 'utf8'));
    var sender1 = message.author
    var msg1 = message.content.toUpperCase();
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);
    var userData = JSON.parse(fs.readFileSync('C:\\Users\\Erwan\\Desktop\\Erwan.Bot\\userData.json','utf8'));


    if (!userData[sender1.id + message.guild.id]) userData[sender1.id + message.guild.id] = {}
    if (!userData[sender1.id + message.guild.id].money) userData[sender1.id + message.guild.id].money = 50;
    if (!userData[sender1.id + message.guild.id].username) userData[sender1.id + message.guild.id].username = message.author.id;


   // console.log(userData)
  //  fs.writeFile('C:\\Users\\Erwan\\Desktop\\discord\\titan.json', JSON.stringify(userData), (err) => {
    //  if (err) console.error(err);
    
   // })


    if (msg1 === prefix + 'MONEY')
    message.channel.send(`**Nom**\n\n**${message.author.username}#${message.author.discriminator}**  \n\n **Money :euro:** \n\n` + userData[sender1.id + message.guild.id].money, + '.' )



//guildstat
	  
if (msg1 === prefix + 'GUILDSTAT') {
		  
  //variable
  
  var guildMoney = 0;
  var guildUser = 0;
  var guildRichest = '';
  var guildRichest$ = 0;
  
  for(var i in userData) {
  if (i.endsWith(message.guild.id)) {
    guildMoney += userData[i].money
      guildUser += 1;
        if (userData[i].money > guildRichest$) {
          guildRichest$ = userData [i].money;
            guildRichest = userData[i].username;
        }
      }
    }
        message.channel.send(`Guild Stat \n\n **Comptes** \n\n ${guildUser} \n\n **ToTal Money** \n\n  ${guildRichest$} `)
    
  }



//${guildRichest}













































  if (message.content.indexOf(prefix + 'dé') === 0) {
   
 let cdseconds = 5;	
     var value = parseInt(message.content.split(' ')[1], 10)
     var min = 1, max = 6
     var botvalue = Math.floor(Math.random() * (max - min +1)) + min;
   
     if(value >= min && value <= max) {
     
     escapeAuthor = message.author.id
     
     joueur = {'tag':'','score':0,'date':0}
     var toto =  new Date().getTime()
     
     if(points['dé'][escapeAuthor] == undefined){
       points['dé'][escapeAuthor] = joueur
       
     }
     
     points['dé'][escapeAuthor].tag = sender.tag //+ ' ' + sender.username
     var derniereDate = points['dé'][escapeAuthor].date + 5000
       
     if(toto>derniereDate) {
       
       //ou : points['dé'][escapeAuthor].score += 1
       
       if (value==botvalue) {
       
       
         message.reply('GG tu a gagner');
         points['dé'][escapeAuthor].score = points['dé'][escapeAuthor].score + 1
         //if(data.deClassement == undefined) { data.deClassement = {}; }
         //escapeAuthor = message.author.username //.escapeSpecialChars()
       } else {
       
         message.reply(':game_die: Ta perdu il falllai faire '+botvalue)
       
       }
       save = true;
     } else {
       message.reply('il est trop tot pour rejouer')
     }
     
     points['dé'][escapeAuthor].date = toto
     }
     else {
   
     message.reply(':game_die: il faut rentrer un nombre entre 1 et 6');    
 
     }
 } else

if (message.content.indexOf(prefix + 'topdé') === 0) {
 
 var sortable = [];
 for (var user in points['dé']) {
   var pts = points['dé'][user].score;
   sortable.push([ user , pts]);
 }

 sortable.sort(function(b, a) {
   return a[1] - b[1];
 });

 
 var nombreDeJoueurAfficher = 0;
 var nombreDeJoueurAfficherMaximum = 10
 var classementTexte = ':trophy: Top 10 Des meilleur joueur \n '
 for(var position in sortable) {
   if(nombreDeJoueurAfficher <= nombreDeJoueurAfficherMaximum) {
   var userId = sortable[position][0]
 
   var pts = sortable[position][1]
   classementTexte = classementTexte + (parseInt(position)+1) + ' ' + points['dé'][userId].tag + ' ' + pts + '\n'
   nombreDeJoueurAfficher = nombreDeJoueurAfficher + 1
   }
 }
 
 message.channel.send( classementTexte.replace('_', '\\_') )

}
    


fs.writeFile('C:\\Users\\Erwan\\Desktop\\Erwan.Bot\\point.json', JSON.stringify(points), (err) => {
  if (err) console.error(err);
});

fs.writeFile('C:\\Users\\Erwan\\Desktop\\Erwan.Bot\\userData.json', JSON.stringify(userData), (err) => {
  if (err) console.error(err);
});



  
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
