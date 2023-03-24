const { SlashCommandBuilder,EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('new')
        .setDescription('Create a new ticket!'),
        async execute(interaction){ 
          const embed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle('**Ticket Opened**')
          .setDescription(` Welcome to your ticket! Please be patient, we will be with you shortly. If you would like to close this ticket please run \`/close\``)
          .addFields(
            { name: 'Open By:', value: `${interaction.member.user.username}`},
            
          )
          .setTimestamp()
        interaction.guild.channels.create({
          name: `ticket-${interaction.member.user.username}`,
          
          permissionOverwrites: [
            {
              id: interaction.member.id,
              allow: ['ViewChannel','SendMessages'],
          },
            {
                id: interaction.guild.id,
                deny: ['ViewChannel'],
            },

          ]
        }).then(async channel => {
          interaction.reply({content: `You have successfully created a ticket! Please click on ${channel} to view your ticket.`, ephemeral: true});
          channel.send({embeds: [embed]});
        
        }
)}
  };