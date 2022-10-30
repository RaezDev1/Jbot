const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with the ping of the bot! Made by J & C'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: 'Pinging...',fetchReply: true, ephemeral: true,});

	  await interaction.followUp({ content:  `Ping: ${sent.createdTimestamp - interaction.createdTimestamp}ms` , ephemeral: true });
	}, 
};