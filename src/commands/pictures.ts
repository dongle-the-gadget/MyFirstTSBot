import { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup } from "discordx";
const axios = require('axios').default;
import loadEnv from "../dotenv";

loadEnv();

@Discord()
@SlashGroup("pictures")
abstract class PicturesCommand {

    @Slash("bing", { description: "Shows Bing daily picture." })
    async bing(interaction: CommandInteraction): Promise<void> {
        await interaction.deferReply();
        
        const bingList = await axios.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1');
        const imageUrl = `https://bing.com${bingList.data.images[0].url}`;

        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, "binary");

        await interaction.editReply({ files: [ buffer ] });
    }

    @Slash("dog", { description: "Shows a random dog image." })
    async dog(interaction: CommandInteraction): Promise<void> {
        await interaction.deferReply();

        const dog = await axios.get(`https://api.thedogapi.com/v1/images/search?api_key=${process.env.PET_API}`);
        var res = dog.data;

        await interaction.editReply(res[0].url);
    }

    @Slash("cat", { description: "Shows a random cat image." })
    async cat(interaction: CommandInteraction): Promise<void> {
        await interaction.deferReply();

        const cat = await axios.get(`https://api.thecatapi.com/v1/images/search?api_key=${process.env.PET_API}`);
        var res = cat.data;

        await interaction.editReply(res[0].url);
    }
}