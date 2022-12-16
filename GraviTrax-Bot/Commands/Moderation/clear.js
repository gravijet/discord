const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Lösche eine bestimmte Anzahl von Nachrichten in einem Kanal.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addIntegerOption(option =>
        option.setName('anzahl')
        .setDescription('Anzahl der Nachrichten, die du löschen willst.')
        .setMinValue(1)
        .setMaxValue(99)
        .setRequired(true)
        )
    .addUserOption(option =>
        option.setName('target')
        .setDescription('Suche dir einen Nutzer aus, von dem du die Nachrichten löschen willst.')
        .setRequired(false)
        ),

async execute(interaction) {
        const {channel, options} = interaction;

        const amount = options.getInteger('anzahl');
        const target = options.getUser("target");

        const messages = await channel.messages.fetch({
            limit: amount +1,
        });

        const res = new EmbedBuilder()
            .setColor(0x5fb041)

        if(target) {
            let i = 0;
            const filtered = [];

            (await messages).filter((msg) =>{
                if(msg.author.id === target.id && amount > i) {
                    filtered.push(msg);
                    i++;
                }
});
await channel.bulkDelete(filtered).then(messages => {
                res.setDescription(`Erfolgreich ${messages.size} Nachrichten von ${target} gelöscht.`);
                interaction.reply({embeds: [res]});
            });
        } else {
            await channel.bulkDelete(amount, true).then(messages => {
                res.setDescription(`Erfolgreich ${messages.size} Nachrichten aus dem Kanal gelöscht.`);
                interaction.reply({embeds: [res]});
            });
        }
    }
}
