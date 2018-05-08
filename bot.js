const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

//2
client.on('message', message => {
    if (message.content === '2k') {
    	message.channel.send('SAN AABOT UNG 2k PESOS MO EDI SA NGIPIN NA MAY ILLUMINATY');
  	}
});

client.on('message', message => {
    if (message.content === 'best admin') {
    	message.channel.send('Si Kairu Best admin (BINAYARAN LANG AKO)');
  	}
});
client.on('message', message => {
    if (message.content === 'remy') {
    	message.channel.send('Remy is fat');
  	}
});
client.on('message', message => {
    if (message.content === 'Yue') {
    	message.channel.send('Yue is fat');
  	}
});
client.on('message', message => {
    if (message.content === '4chan') {
    	message.channel.send('4chan is fat');
  	}
});
client.on('message', message => {
    if (message.content === 'Box') {
    	message.channel.send('Box is fat');
  	}
});

// change

client.on('message', message => {
  if (message.content === '!!play') {
    // Note that this will only work if the message was sent in a guild
    // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

client.login('token');
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
