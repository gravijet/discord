const {SlashCommandBuilder, CommandInteraction} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("petar")
    .setDescription("Erfahre die wichtigsten Infos über Petar."),

    execute(interaction) {

        interaction.reply({content: "<a:arrow_2:1047504475092426793> **Hallo!** <a:cool_1:1047505357997604884> <a:cool_Cat:1047500668711211059> <a:verification:1041779183560446045>"
    })
        
    }

    

    
}