const { SlashCommandBuilder, EmbedBuilder,ActionRowBuilder,ButtonBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Display info about this server. Made by Jason L.'),
	async execute(interaction,MessageEmbed) {
		const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('**INVITE JBOT TODAY**')
		.setDescription(`If you want to invite JBot you can hit the button below`)
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setURL('https://discord.com/api/oauth2/authorize?client_id=1032095426838536303&permissions=8&scope=bot%20applications.commands')
                .setLabel('Invite me!')
                .setStyle('5'),
        );
	await interaction.reply({ embeds: [embed],components: [row], ephemeral: true});
	},
};