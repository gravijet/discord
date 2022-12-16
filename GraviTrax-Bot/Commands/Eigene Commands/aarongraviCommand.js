const {SlashCommandBuilder, CommandInteraction} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("aarongravi")
    .setDescription("Erfahre die wichtigsten Infos über Aarongravi!"),

    execute(interaction) {

        interaction.reply({content: "<a:blinkender_pfeil:1047500718191411321> Hallo!"
    })
        
    }
}
