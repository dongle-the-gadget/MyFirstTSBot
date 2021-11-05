import { CommandInteraction, Message, MessageEmbed } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
abstract class PingCommand {

    @Slash("ping", { description: "Pings the bot." })
    async ping(interaction: CommandInteraction): Promise<void> {
        const reply = (await interaction.deferReply({ fetchReply: true })) as Message;
        const embed = new MessageEmbed()
            .setTitle("Ping result")
            .addField("Roundtrip latency", `\`\`\`${reply.createdTimestamp  - interaction.createdTimestamp} ms\`\`\``, true)
            .addField("WebSocket latency", `\`\`\`${interaction.client.ws.ping} ms\`\`\``, true)
            .setColor("#00ff7f");
        interaction.editReply({ embeds: [embed] });
    }
}