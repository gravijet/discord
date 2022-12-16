const {SlashCommandBuilder, CommandInteraction} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("gutenmorgen")
    .setDescription("Guten Morgen!"),

    execute(interaction) {

        interaction.reply({content: "Einen schönen guten Morgen wünscht euch Nick 400!☀️ "
    })
        
    }

    

    
}