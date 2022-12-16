const {Client} = require("discord.js")

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("Der GraviTrax-Bot ist online!")
    }
}