const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Banne einen User von diesem Discord-Server.")
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(option =>
        option.setName("user")
        .setDescription("Welchen Benutzer willst du bannen?")
        .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("grund")
            .setDescription("Grund des Banns")
            ),
            
            async execute(interaction) {
                const { options, channel } = interaction;

                const user = options.getUser("user");
                const grund = options.getString("grund") || "Kein Grund angegeben.";

                const member = await interaction.guild.members.fetch(user.id);

                const errorEmbed = new EmbedBuilder()
                .setDescription(`Du kannst ${user.username} nicht bannen, weil er eine höhere oder gleich hohe Rolle wie du besitzt.`)
                .setColor("Red")

                if (member.roles.highest.position >= interaction.member.roles.highest.position)
                return interaction.reply({ embeds: [errorEmbed] })

                await member.ban()

                const successEmbed = new EmbedBuilder()
                .setDescription(` ${user} wurde  erfolgreich gebannt mit dem Grund ${grund}`)
                .setColor("Green")

                await interaction.reply({ embeds: [successEmbed] })

            }
}