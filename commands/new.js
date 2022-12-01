const { SlashCommandBuilder } = require('@discordjs/builders');
 const { MessageEmbed } = require('discord.js');  
module.exports = {
    data: new SlashCommandBuilder()
        .setName('new')
        .setDescription('Create a new ticket!'),
        async execute(interaction, client, fs) { 

          interaction.guild.channels.create(`ticket-${interaction.member.user.username}`, {
        permissionOverwrites: [
            {
                id: interaction.member.id,
                allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
            },
            {
                id: interaction.guild.roles.everyone,
                deny: ['VIEW_CHANNEL'],
            },
        ],
        type: 'text',
    }).then(async channel => {
        interaction.reply({content: `You have successfully created a ticket! Please click on ${channel} to view your ticket.`, ephemeral: true});
        channel.send({content: `Hello ${interaction.member.user.username}, Welcome to your ticket! Please be patient, we will be with you shortly. If you would like to close this ticket please run \`/close\``});
})}};