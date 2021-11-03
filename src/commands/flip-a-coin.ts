import { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashChoice, SlashOption } from "discordx";

enum CoinSides {
    Heads = "Heads",
    Tails = "Tails"
}

@Discord()
abstract class FlipACoinCommand {

    @Slash("flip-a-coin", { description: "Resolve any conflicts with a flip of the coin." })
    async flipacoin(
        @SlashChoice(CoinSides)
        @SlashOption("side", { required: true })
        side: string,
        interaction: CommandInteraction): Promise<void> {
        const isHeadsChosenByUser = side === "Heads";
        const isHeadsChosenByBot = Math.random() <= 0.5;
        await interaction.reply(isHeadsChosenByBot === isHeadsChosenByUser ? "Winner winner!" : "Oh dear, you got the wrong one this time.");
    }
}