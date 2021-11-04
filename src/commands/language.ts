import { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
import { localize } from 'pseudo-localization';

@Discord()
@SlashGroup("language")
abstract class LanguageCommands {

    @Slash("pseudo", { description: "Pseudolocalize a string." })
    async flipacoin(
        @SlashOption("string", { required: true, description: "The string to pseudolocalize." })
        text: string,
        interaction: CommandInteraction): Promise<void> {
        await interaction.reply(localize(text));
    }
}