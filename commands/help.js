const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Replies with help menu! Made by Jason L.'),
  async execute(interaction) {
    const helpmenu = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Help Menu')
      .addFields(
        {
          name: 'addrole',
          value: 'This is to add a role to a user',
          inline: true,
        },
        {
          name: 'avatar',
          value: 'This is to see someone avatar',
          inline: true,
        },
        {
          name: 'ban',
          value: 'Ban someone from your server',
          inline: true,
        },
        {
          name: 'claim',
          value: 'To claim a ticket(Tickets coming soon)',
          inline: true,
        },
        {
          name: 'clear',
          value: 'This is to clear a chat',
          inline: true,
        },
        {
          name: 'help',
          value: 'This is to show the help menu',
          inline: true,
        },
        {
          name: 'invite',
          value: 'This is the show the invite link',
          inline: true,
        },
        {
          name: 'kick',
          value: 'This is to kick someone',
          inline: true,
        },
        {
          name: 'ping',
          value: 'This is to see the ping of the bot',
          inline: true,
        },
        {
          name: 'removerole',
          value: 'This is to remove a role from a user',
          inline: true,
        },
        {
          name: 'server',
          value: 'This is to see server info',
          inline: true,
        },
        {
          name: 'userinfo',
          value: 'This is to see user info',
          inline: true,
        },
      )
      .setTimestamp()
    await interaction.reply({  embeds: [helpmenu], ephemeral: true,})
  },
}
