const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('claim')
		.setDescription('Display info about this server. Made by Jason L.'),
    
	async execute(interaction,MessageEmbed) {
        if(!interaction.channel.name.startsWith('ticket-')) return interaction.reply({content: "This isn't a ticket!", ephemeral: true}) 
        const exampleEmbed = new EmbedBuilder()
        .setColor('#00FF00')
        .setTitle('Claimed') 
        .setDescription(`Claimed by ${interaction.member.user.username} `)
        .setTimestamp()
        .setFooter({ text: 'Powered by JBot'});


await interaction.reply({  embeds: [exampleEmbed]});
	},
};