const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('To clear a chat! Made by Jason L.')
    .addStringOption(option => option.setName('number').setDescription('The user\'s avatar to show').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

  async execute(interaction) {
    const number = interaction.options.getString('number');
await interaction.channel.bulkDelete(number).then(() => {
    interaction.reply({ content: `${number} Message was deleted`, ephemeral: true }).catch(e => {});
}).catch(e => {
    interaction.reply({ content: `You can not delete messages more then 14 days old`, ephemeral: true }).catch(e => {});
});
}
};
