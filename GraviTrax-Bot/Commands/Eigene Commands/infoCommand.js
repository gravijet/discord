const {SlashCommandBuilder, CommandInteraction} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Erfahre die wichtigsten Infos über diesen Bot!"),

    execute(interaction) {

        interaction.reply({content: "<a:blinkender_pfeil:1047500718191411321> Ich bin der GraviTrax-Bot. <a:developer:1047591414709629009> Erstellt von **@GraviJet.** <:off:1047592370973179945> Ich bin leider nur dann online, wenn GraviJet online ist, da ich von GraviJet gehostet werde. <a:team:1047504098863357992> Support-Server: https://discord.gg/Muh8vueaM4 <a:youtube:1042074848828067970> Unterstütze mich gerne auf YouTube: https://youtube.com/gravijet"
    })
        
    }

    

    
}