const {SlashCommandBuilder, CommandInteraction} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("leon")
    .setDescription("Erfahre die wichtigsten Infos über Leon!"),

    execute(interaction) {

        interaction.reply({content: "<a:blinkender_pfeil:1047500718191411321> Halloilöchen!"
    })
        
    }
}
