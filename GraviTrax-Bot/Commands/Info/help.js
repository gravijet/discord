const { EmbedBuilder, SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, ComponentType } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Erhalte ein Help-Menü mit allen Commands und wichtigen Informationen."),

    async execute(interaction) {
        const emojis = {
            info: "📋",
            eigene_commands: "📝",
            moderation: "🛠️"
        };

        const directories = [
            ...new Set(interaction.client.commands.map((cmd) => cmd.folder)),
        ];

        const formatString = (str) =>
        `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

        const categories = directories.map((dir) => {
            const getCommands = interaction.client.commands
            .filter((cmd) => cmd.folder === dir)
            .map((cmd) => {
                return {
                    name: cmd.data.name,
                    description:
                    cmd.data.description || "Es gibt keine Beschreibung für diesen Command.",
                };
            });

            return {
                directory: formatString(dir),
                commands: getCommands,
            };
        });
        const embed = new EmbedBuilder()
        .setTitle("**__Help-Menü__**")
        .setDescription("Suche dir eine Kategorie im Dropdown-Menü aus.")
        .addFields(
            { name: "Eigene Commands", value: "Commands von verschiedenen Benutzern."},
            { name: "Info", value: "Alle Info Commands des Bots."},
            { name: "Moderation", value: "Alle Moderations Commands des Bots."}
        )
        .setColor("Aqua")

        const components = (state) => [
            new ActionRowBuilder().addComponents(
                new SelectMenuBuilder()
                .setCustomId("help-menu")
                .setPlaceholder("Wähle eine Kategorie zur Hilfe aus.")
                .setDisabled(state)
                .addOptions(
                    categories.map((cmd) => {
                        return {
                            label: cmd.directory,
                            value: cmd.directory.toLowerCase(),
                            description: `Alle Commands der Kategorie ${cmd.directory}.`,
                            emoji: emojis[cmd.directory.toLowerCase() || null],
                        }
                    })
                )
            ),
        ];

        const initialMessage = await interaction.reply({
            embeds: [embed],
            components: components(false),
        })

        const filter = (interaction) =>
        interaction.user.id === interaction.member.id;

        const collector = interaction.channel.createMessageComponentCollector({
            filter,
            componentType: ComponentType.SelectMenu,
        });

        collector.on("collect", (interaction) => {
            const [directory] = interaction.values;
            const category = categories.find(
                (x) => x.directory.toLowerCase() === directory
            );

            const categoryEmbed = new EmbedBuilder()
            .setTitle(`${formatString(directory)} Commands`)
            .setColor("Aqua")
            .setDescription(`Eine Lister aller Commands der Kategorie ${directory}.`)
            .addFields(
                category.commands.map((cmd) => {
                    return {
                        name: `\`${cmd.name}\``,
                        value: cmd.description,
                        inline: true,
                    };
                })
            );
            interaction.update({ embeds: [categoryEmbed] });
        })

        collector.on("end", () => {
            initialMessage.edit({ components: components(true) });
        });
    },
};