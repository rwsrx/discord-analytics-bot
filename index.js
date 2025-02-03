const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers
  ] 
});

client.once('ready', () => {
  console.log('Bot online!');
});

client.login(process.env.DISCORD_BOT_TOKEN);