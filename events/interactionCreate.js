
module.exports = {
  name: 'interactionCreate',
  on: true,
  async execute(client, interaction,member) {
    console.log(
      client.user.tag +
        ' in #' +
        client.channel.name +
        ' triggered an interaction.'
    )
  },
}


    //!interaction?.member?.roles?.cache?.has(vRole) &&
      //(await client.member.roles.add(vRole).catch(function (member) {
        //console.log('added')
      //}))