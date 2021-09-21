const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
const config = require('./config.json');

client.on('ready', () => {
	console.log('Estamos pa');
});

const prefix = config.prefix;


client.on('messageCreate', (message) => {
	if (message.author.bot) {return;}
	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.send('pong');
	}
});

client.on('messageCreate', (message) => {
	if (message.content.startsWith(prefix + 'embed')) {
		new Discord.MessageEmbed();
	}
});


client.login(config.token);
