const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kicke einen User von diesem Discord-Server.")
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addUserOption(option =>
        option.setName("user")
        .setDescription("Welchen Benutzer willst du kicken?")
        .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("grund")
            .setDescription("Grund des Kicks")
            ),
            
            async execute(interaction) {
                const { options, channel } = interaction;

                const user = options.getUser("user");
                const grund = options.getString("grund") || "Kein Grund angegeben.";

                const member = await interaction.guild.members.fetch(user.id);

                const errorEmbed = new EmbedBuilder()
                .setDescription(`Du kannst ${user.username} nicht kicken, weil er eine höhere oder gleich hohe Rolle wie du besitzt.`)
                .setColor("Red")

                if (member.roles.highest.position >= interaction.member.roles.highest.position)
                return interaction.reply({ embeds: [errorEmbed] })

                await member.kick()

                const successEmbed = new EmbedBuilder()
                .setDescription(` ${user} wurde  erfolgreich gekickt mit dem Grund ${grund}`)
                .setColor("Green")

                await interaction.reply({ embeds: [successEmbed] })

            }
}