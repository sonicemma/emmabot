const { Command } = require('discord.js-commando');

module.exports = class GreetCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hello',
            aliases: ['hi'],
            group: 'admin',
            memberName: 'hello',
            description: 'Causes emmabot to tell you hello'
        })
    }

    run(message) {
        return message.say('Hello!')
    }
};