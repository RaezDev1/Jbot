const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them. Made by Jason L.')
		.addUserOption(option => option.setName('target').setDescription('User who is getting ban').setRequired(true))
		.addStringOption(option =>option.setName('reason').setDescription('The reason for banning'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
		async execute(interaction,client) {
		const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
		interaction.guild.bans.create(target, {reason: `${reason}`})
		await interaction.reply(`Banning ${target.username} for reason: ${reason} `);
		await interaction.guild.members.ban(target);

		

	}
};