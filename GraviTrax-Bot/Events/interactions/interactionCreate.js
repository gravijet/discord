const {CommandInteraction} = require("discord.js")

module.exports = {
    name: "interactionCreate",

    execute(interaction, client) {
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) {
            interaction.reply({content: "Erfahre die wichtigsten Infos über diesen Bot!"})
        }

        command.execute(interaction, client);
    }
}