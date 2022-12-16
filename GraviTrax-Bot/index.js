const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;

const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const {loadEvents} = require('./Handlers/eventHandler');
const {loadCommands} = require('./Handlers/commandHandler');

const client = new Client({
    intents: [ Guilds, GuildMembers, GuildMessages ],
    partials: [User, Message, GuildMember, ThreadMember],
});

client.once('ready', () => {
    console.log("Der Bot ist jetzt online!")
})
client.commands = new Collection();
client.config = require("./config.json");

client.login("MTA0ODU4MzA2OTUyMDYzODAwMg.GG6fqf.vkQaZz4_WepwvVFpNLgu57IMooCGCTSK0-a1Xg").then(() => {
    loadEvents(client);
    loadCommands(client);
})
