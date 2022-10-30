const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them. Made by J & C')
		.addUserOption(option => option.setName('target').setDescription('The member to kick'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

			async execute(interaction) {
		const member = interaction.options.getMember('target');
		member.ban();
		return interaction.reply({ content: `Banned: ${member.user.username}`, ephemeral: true });
		
	},
};