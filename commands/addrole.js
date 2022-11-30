const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addrole')
		.setDescription('Select a member and add a role to  them. Made by Jason L.')
		.addRoleOption(option => option.setName('role').setDescription('The member to kick'))
        .addUserOption(option => option.setName('target').setDescription('The member to kick'))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
	async execute(interaction) {
		const role = interaction.options.getRole('role');
    const member = interaction.options.getMember('target');
    member.roles.add(role);
		return interaction.reply({ content: `Addrole to: ${member.user.username}`, ephemeral: true });
	},
};