const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function() {
    client.user.setActivity(`|En codage|Heberger 24h/24|Erwan_ Mon maitre`);
    console.log("Connected");
});

client.on('ready', () => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

