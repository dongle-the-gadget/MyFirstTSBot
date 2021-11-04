import { CommandInteraction, User, Client } from "discord.js";
import { Discord, Slash, SlashChoice, SlashGroup, SlashOption } from "discordx";

@Discord()
@SlashGroup("power")
abstract class PowerCommands {

    private async isBotOwner(target: User, client: Client): Promise<boolean | undefined> {
        const { owner } = await client.application!.fetch();
        if (owner === null)
            return undefined;
        else if (owner instanceof User)
            return target.id === owner.id;
        else
            return owner.members.has(target.id);
    }

    @Slash("shutdown", { description: "(DANGEROUS) Shuts down the bot." })
    async shutdown(
        @SlashChoice("Yes I am sure that this operation will shut down the bot.", 1)
        @SlashOption("are-you-sure")
        areyousure: number,
        interaction: CommandInteraction): Promise<void> {
            const isOwner = await this.isBotOwner(interaction.user, interaction.client);
            if (isOwner === undefined)
                await interaction.reply("Sorry, but I cannot find my owner :(");
            else if (!isOwner)
                await interaction.reply("You cannot run this command since you are not my owner.");
            else if (!areyousure)
                await interaction.reply("Are you sure you want to shut down the bot? If you are, please specify `are-you-sure: Yes I am sure that this operation will shut down the bot.`");
            else {
                await interaction.reply("Bot is shutting down...");
                process.exit(0);
            }
    }

    @Slash("restart", { description: "Restarts the bot." })
    async restart(
        interaction: CommandInteraction): Promise<void> {
            const isOwner = await this.isBotOwner(interaction.user, interaction.client);
            if (isOwner === undefined)
                await interaction.reply("Sorry, but I cannot find my owner :(");
            else if (!isOwner)
                await interaction.reply("You cannot run this command since you are not my owner.");
            else if (process.env.NODE_ON_DOCKER != "docker")
                await interaction.reply("The bot is not running on Docker. Running this command will be the equivalent of `/power shutdown`");
            else {
                await interaction.reply("Bot is restarting...");
                process.exit(1);
            }
    }
}
