const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits,Routes} = require('discord.js');
const { REST } = require('@discordjs/rest');
const {app} = require('./config');
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;


const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(app.token);

rest.put(Routes.applicationCommands(app.clientId),
{ body: commands },)
	.then(() => console.log('\x1b[34m[COMMANDS]: Successfully registered application commands.\x1b[0m'))
	.catch(console.error);



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();


for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));		
	}};
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error! Please join the support server and make a ticket and use code `JBot.ERRORv2`', ephemeral: true });
	}
});

checkVersion();
async function checkVersion() {
	let version = "1.1.0"
	let versionCallback = await axios({
        method: 'GET', 
        url: `https://raw.githubusercontent.com/JasonLsd/version-pub-api/main/versions.json`,
        headers: {Accept: 'application/json, text/plain, */*','User-Agent': '*'} 
    });
	if(!versionCallback.data) return console.log('Version check failed...');
	let check = versionCallback.data.jbot
	if(check == version) {
		console.log(`\x1b[35m[VERSION]: You are on the latest version! (${version})\x1b[0m`);
	} else {
		console.log(`\x1b[35m[VERSION]:Version outdated!!!\nCurrent Version: ${version}\nLatest Version: ${check}\x1b[0m`)
	};
}


client.login(app.token);