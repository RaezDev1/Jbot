const { SlashCommandBuilder} = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, setFooter } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('To verify someone! Made by J & C'),
	async execute(interaction) {
		
let verifyButtonRow = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
  .setCustomId("verification-button")
  .setLabel("Verify!")
  .setStyle("3")
);
await interaction.reply({ content: `You are now verified!`, ephemeral: true });
	}
};