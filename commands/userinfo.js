const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Display info about yourself or another user. Made by Jason L.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`Your username: ${user.username}\nYour ID: ${interaction.user.id} `);
		return interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
	},
};