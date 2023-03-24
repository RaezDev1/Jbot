const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('close')
        .setDescription('Close a ticket!')
        .addUserOption(option => option.setName('member').setDescription('The user who open the ticket').setRequired(true)),
        async execute(interaction){ 
            const member = interaction.options.getUser('member');

            if(!interaction.channel.name.startsWith('ticket-')) return interaction.reply({content: "This isn't a ticket!", ephemeral: true}) 
            await member.send(`Your ticket in ${interaction.guild.name} was closed `).catch(err => {
                interaction.editReply({ content: `Cannot send a DM to a user`, ephemeral: true})
        })
            interaction.channel.delete()
    }
};