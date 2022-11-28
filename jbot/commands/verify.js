const { SlashCommandBuilder} = require('discord.js');
const {vRole} = require('../config.json')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('To verify someone! Made by Jason L.'),
	async execute(interaction) {
		await interaction.reply({ content: `You are now verified!`, ephemeral: true });
	
	}
};
