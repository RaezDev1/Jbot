const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them. Made by RaezDev.')
		.addUserOption(option => option.setName('member').setDescription('User who is getting ban').setRequired(true))
		.addStringOption(option =>option.setName('reason').setDescription('The reason for banning'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
		async execute(interaction) {
			await interaction.deferReply();

		const member = interaction.options.getUser('member');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
		await member.send(`You have been Banned from\n**Server:**\n${interaction.guild.name}\n**Reason:**\n${reason}`).catch(err => {
			interaction.editReply({ content: `Cannot send a DM to a user`, ephemeral: true})
	})
	await wait(1000);
		 await interaction.editReply({ content: `Banned ${member.username} for reason: ${reason}`, ephemeral: true });
			interaction.guild.bans.create(member, {reason: `${reason}`}).catch(err => {
				interaction.editReply({ content: `I do not have enough permissions to do that.`})
	});
	}
};