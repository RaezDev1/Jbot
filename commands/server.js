const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server. Made by RaezDev.'),
	async execute(interaction,MessageEmbed) {
		const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Server Info')
		.setDescription(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`)
	await interaction.reply({ embeds: [embed], ephemeral: true});
	},
};