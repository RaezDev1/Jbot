const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Select a member and ban them. Made by Jason L.')
        .addStringOption((option) => option.setName('userid').setDescription('The ID of the user to ban').setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
		async execute(interaction) {
			await interaction.deferReply();
            const userid = interaction.options.getString('userid')
		 await interaction.editReply({ content: `UNBan `, ephemeral: true });
         await interaction.guild.members.unban(userid).catch(err => {
         interaction.editReply({ content: `I do not have enough permissions to do that.`})
	});	

	}
};