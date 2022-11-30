const { ActivityType} = require('discord.js');
const { presence} = require('../config');
const figlet = require('figlet');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`\x1b[36m[CREDITS]: This bot was made by Jason L.\x1b[0m`)
		figlet('JBot'
		, function(err, data) {
			if (err) {
				console.log(err)
				return;
			}
			console.log(`\x1b[36m%s\x1b[0m`, data)
		});

		client.user.setActivity(presence.Activity,{ type: ActivityType.Watching });
		client.user.setStatus(presence.Status);
		
	},
};