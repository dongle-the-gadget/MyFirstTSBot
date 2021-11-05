import { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashChoice, SlashGroup, SlashOption } from "discordx";

enum CoinSides {
    Heads = "Heads",
    Tails = "Tails"
}

@Discord()
@SlashGroup("random")
abstract class RandomCommands {

    @Slash("flip-a-coin", { description: "Resolve any conflicts with a flip of the coin." })
    async flipacoin(
        @SlashChoice(CoinSides)
        @SlashOption("side", { required: true, description: "The side you bet the coin will face." })
        side: string,
        interaction: CommandInteraction): Promise<void> {
        const isHeadsChosenByUser = side === "Heads";
        const isHeadsChosenByBot = Math.random() <= 0.5;
        await interaction.reply(isHeadsChosenByBot === isHeadsChosenByUser ? "Winner winner!" : "Oh dear, you got the wrong one this time.");
    }

    @Slash("rock-paper-scissor", { description: "Rock paper scissor" })
    async rockpapersicssor(
        interaction: CommandInteraction
    ): Promise<void> {
        const value = Math.trunc(Math.random() * 2 + 1);
        switch (value) {
            case 1:
                await interaction.reply("Rock");
                break;
            case 2:
                await interaction.reply("Paper");
                break;
            case 3:
                await interaction.reply("Scissor");
                break;
        }
    }

    @Slash("number", { description: "Generate a random number." })
    async random(
        @SlashOption("min", { description: "The smallest number to be generated.", required: true })
        min: number,
        @SlashOption("max", { description: "The largest number to be generated.", required: true })
        max: number,
        interaction: CommandInteraction
    ): Promise<void> {
        if (!Number.isInteger(min) || !Number.isInteger(max)) {
            await interaction.reply("Both the minimum value and the maximum value must be integers.");
            return;
        }

        if (min > max) {
            await interaction.reply("The minimum value must be smaller or equal to the maximum value.");
            return;
        }

        const draw = Math.trunc(Math.random() * (max - min) + min);
        await interaction.reply(`${draw}`);
    }
}