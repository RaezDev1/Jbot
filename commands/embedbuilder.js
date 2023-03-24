const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embedbuilder')
		.setDescription('Display info about this server. Made by RaezDev')
		.addStringOption(option =>option.setName('title').setDescription('The title of the embed').setRequired(true))
		.addStringOption(option =>option.setName('description').setDescription('The description of the embed').setRequired(true))
		.addStringOption(option =>option.setName('footer').setDescription('The footer of the embed').setRequired(true)),

	async execute(interaction) {
		const embedTitle = interaction.options.getString('title')
		const description = interaction.options.getString('description')
		const footer = interaction.options.getString('footer')

		const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle(embedTitle)
		.setDescription(description)
		.setTimestamp()
		.setFooter({ text: footer })
	await interaction.reply({ embeds: [embed]});
	},
};