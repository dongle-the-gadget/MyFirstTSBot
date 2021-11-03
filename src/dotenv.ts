import dotenv from 'dotenv'
import path from 'path'

export default function loadEnv() {
    const envPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
    dotenv.config({ path: envPath });

    if (!process.env.BOT_TOKEN)
        throw new Error("A bot token must be specified.");
    
    if (process.env.NODE_ENV === "development" && !process.env.GUILD_ID)
        throw new Error("A guild ID is required for dev builds.");
}