const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addrole')
		.setDescription('Select a member and add a role to  them. Made by RaezDev.')
		.addRoleOption(option => option.setName('role').setDescription('The role you want to add to the member').setRequired(true))
        .addUserOption(option => option.setName('member').setDescription('The user you want to add a role to').setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
	async execute(interaction) {
	const role = interaction.options.getRole('role');
    const member = interaction.options.getMember('member');
    member.roles.add(role);
		return interaction.reply({ content: `Role ${role} was added to ${member}`, ephemeral: true });
	},
};