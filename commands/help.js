const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder ,SelectMenuBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Replies with help menu! Made by RaezDev.'),
  async execute(interaction) {

    let mod = [
      "\`ban:\` Ban someone from your server",
      "\`kick:\` This is to kick someone",
      "\`unban:\` This is to unban someone from your server",
      "\`clear:\` This is to clear a chat",
      "\`removerole:\` This is to remove a role from a user",
      "\`addrole:\` This is to add a role to a user",
      "\`embedbuilder:\` To make a embed for your server",

    ]
    let info = [
      "\`server:\` To see server info",
      "\`userinfo:\` To see users info",
      "\`invite:\` To invite JBot to your server",
      "\`help:\` To see a help menu",
      "\`avatar:\` This is to see someone avatar",
      "\`ping:\` To see the ping of the bot",

    ]
    let tickets = [
      "\`new:\` To open a ticket",
      "\`close:\` To close a ticket",
      "\`claim:\` To claim a ticket",

    ]
      const helpembed = new EmbedBuilder()
        .setThumbnail(interaction.user.displayAvatarURL())
        .setTitle(`📫 | Commands`)
        .setDescription(`**👮‍♂️ - Moderation**\n• ${mod.join("\n • ")}\n**⚙️ - Information**\n• ${info.join("\n • ")}\n**🎟️ - Ticket**\n• ${tickets.join("\n • ")}`)

     interaction.reply({ embeds: [helpembed], ephemeral: true});
  },
};