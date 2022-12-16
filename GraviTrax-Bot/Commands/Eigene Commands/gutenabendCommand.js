const {SlashCommandBuilder, CommandInteraction} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("gutenacht")
    .setDescription("Gute Nacht!"),

    execute(interaction) {

        interaction.reply({content: "Eine Schöne gute Nacht wünscht euch Nick400! 🌙 "
    })
        
    }

    

    
}