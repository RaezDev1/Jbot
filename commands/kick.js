const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Select a member and kick them. Made by Jason L.')
		.addUserOption(option => option.setName('member').setDescription('The member to kick').setRequired(true))
		.addStringOption(option =>option.setName('reason').setDescription('The reason for banning'))
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

			async execute(interaction) {
				await interaction.deferReply();
  	
		const member = interaction.options.getMember('member');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
		
		await member.send({ content: `You have been Kicked for \`${reason}\`!`, ephemeral: true}).catch(err => {
			interaction.editReply({ content: `Cannot send a DM to a user`, ephemeral: true})
	})
	await wait(1000);

		member.kick().catch(err => {
			interaction.editReply({ content: `I do not have enough permissions to do that.`, ephemeral: true})
	})

	await interaction.editReply({ content: `${member.user.username} Was kicked for ${reason}!`, ephemeral: true });

	

	},
};