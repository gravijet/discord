const {SlashCommandBuilder, CommandInteraction} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("thanks")
    .setDescription("Bedanke dich beim Server-Boost!"),
    execute(interaction) {

        interaction.reply({content: "<a:h:1047591376273031288> Danke für den Server-Boost!   <a:winner:1047504317894103151> Bedankt euch alle für den Boost bei unserem Server-Booster!"
    })
        
    }
}
