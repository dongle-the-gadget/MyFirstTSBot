import "reflect-metadata";
import path from "path";
import { Client, IGuild } from "discordx";
import { Intents } from "discord.js";
import loadEnv from './dotenv';

loadEnv();

var botGuilds: IGuild[] | undefined = undefined;

if (process.env.GUILD_ID) {
    botGuilds = [process.env.GUILD_ID];
}

const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
    ],
    classes: [
        path.join(__dirname, "commands", "**/*.{ts,js}"),
        path.join(__dirname, "events", "**/*.{ts,js}")
    ],
    botGuilds: botGuilds
});

client.on("ready", async () => {
    console.log("\n");
    await client.initApplicationCommands({
        guild: { log: true },
        global: { log: true },
    });
    await client.initApplicationPermissions();
    console.log(`\nLogged in as ${client.user!.tag}`);
});

client.on("interactionCreate", (interaction) => {
    client.executeInteraction(interaction);
});

client.login(process.env.BOT_TOKEN as string);
