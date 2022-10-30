const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { applyButton }  = require("../config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('apply')
		.setDescription('This is for if you want to apply for staff! Made by J & C'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setURL(applyButton)
					.setLabel('Apply Here!')
					.setStyle(`5`)
			);

		await interaction.reply({ content: 'If you want to appy for staff click here!!', components: [row], ephemeral: true});
	}
};