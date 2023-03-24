const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('removerole')
		.setDescription('Select a member and remove role form them. Made by RaezDev.')
		.addRoleOption(option => option.setName('role').setDescription('The role you want to remove from the user').setRequired(true))
        .addUserOption(option => option.setName('member').setDescription('The user you want to remove the role from').setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
	async execute(interaction) {
		const role = interaction.options.getRole('role');
    const member = interaction.options.getMember('member');
    member.roles.remove(role);
		return interaction.reply({ content: `Role ${role} was remove from ${member}`, ephemeral: true });

	},
};