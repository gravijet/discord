const {SlashCommandBuilder, CommandInteraction} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("samswelt")
    .setDescription("Erfahre die wichtigsten Infos über Sam's Welt!"),

    execute(interaction) {

        interaction.reply({content: " Denk dir was interessantes🤩!"
    })
        
    }
}