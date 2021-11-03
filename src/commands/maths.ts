import { CommandInteraction, Message, MessageEmbed } from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";

@Discord()
@SlashGroup("maths", "Maths commands", {
    "divide": "Division commands"
})
abstract class MathsCommands {

    @Slash("add", { description: "Adds two numbers." })
    async add(
        @SlashOption("num1", { description: "The first number.", type: "NUMBER", required: true })
        num1: number,
        @SlashOption("num2", { description: "The second number.", type: "NUMBER", required: true })
        num2: number,
        interaction: CommandInteraction): Promise<void> {
        interaction.reply(`${num1 + num2}`);
    }

    @Slash("subtract", { description: "Subtracts two numbers." })
    async subtract(
        @SlashOption("num1", { description: "The first number.", type: "NUMBER", required: true })
        num1: number,
        @SlashOption("num2", { description: "The second number.", type: "NUMBER", required: true })
        num2: number,
        interaction: CommandInteraction): Promise<void> {
        interaction.reply(`${num1 - num2}`);
    }

    @Slash("multiply", { description: "Multiplies two numbers." })
    async multiply(
        @SlashOption("num1", { description: "The first number.", type: "NUMBER", required: true })
        num1: number,
        @SlashOption("num2", { description: "The second number.", type: "NUMBER", required: true })
        num2: number,
        interaction: CommandInteraction): Promise<void> {
        interaction.reply(`${num1 * num2}`);
    }

    @Slash("whole", { description: "Returns the decimal number after a division of two numbers." })
    @SlashGroup("divide")
    async whole(
        @SlashOption("num1", { description: "The first number.", type: "NUMBER", required: true })
        num1: number,
        @SlashOption("num2", { description: "The second number.", type: "NUMBER", required: true })
        num2: number,
        interaction: CommandInteraction): Promise<void> {
        interaction.reply(`${num1 / num2}`);
    }

    @Slash("integer", { description: "Returns only the integer after a division of two numbers." })
    @SlashGroup("divide")
    async integer(
        @SlashOption("num1", { description: "The first number.", type: "NUMBER", required: true })
        num1: number,
        @SlashOption("num2", { description: "The second number.", type: "NUMBER", required: true })
        num2: number,
        interaction: CommandInteraction): Promise<void> {
        interaction.reply(`${Math.trunc(num1 / num2)}`);
    }

    @Slash("remainder", { description: "Returns only the remainder after a division of two numbers." })
    @SlashGroup("divide")
    async remainder(
        @SlashOption("num1", { description: "The first number.", type: "NUMBER", required: true })
        num1: number,
        @SlashOption("num2", { description: "The second number.", type: "NUMBER", required: true })
        num2: number,
        interaction: CommandInteraction): Promise<void> {
        interaction.reply(`${num1 % num2}`);
    }
}