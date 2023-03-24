const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Display info about yourself or another user. Made by RaezDev.')
		.addUserOption(option => option.setName('member').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const user = interaction.options.getUser('member');
		if (user) return interaction.reply(`Users username: ${user.username}\nUsers ID: ${interaction.user.id} `);
		return interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
	},
};