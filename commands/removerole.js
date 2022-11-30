const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('removerole')
		.setDescription('Select a member and remove role form them. Made by Jason L.')
		.addRoleOption(option => option.setName('role').setDescription('The member to kick'))
        .addUserOption(option => option.setName('target').setDescription('The member to kick'))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
	async execute(interaction) {
		const role = interaction.options.getRole('role');
    const member = interaction.options.getMember('target');
    member.roles.remove(role);
		return interaction.reply({ content: `removerole from: ${member.user.username}`, ephemeral: true });

	},
};