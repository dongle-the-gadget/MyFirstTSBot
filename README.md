# MyFirstTSBot
A Discord bot written in TypeScript that may or may not have a reason to exist ¯\\\_(ツ)_/¯

## Hosting
### Quickstart
1. Install Docker Engine and Docker Compose.
   - For macOS and Windows, install [Docker Desktop](https://www.docker.com/get-started). This includes both Docker Engine and Docker Compose.
   - For Linux, follow these instructions:
     - [Install Docker Engine](https://docs.docker.com/engine/install/).
     - [Install Docker Compose](https://docs.docker.com/compose/install/).
2. Download the [docker-compose.yml](/docker-compose.yml) file from this repo.
3. On the folder containing the `docker-compose.yml` file, create a `.env.production` file using the `KEY=VALUE` structure
   | Key       | Value                                               | Note                                                                 |
   |-----------|-----------------------------------------------------|----------------------------------------------------------------------|
   | BOT_TOKEN | Your Discord bot token.                             | Required.                                                            |
   | PET_API   | https://thecatapi.com or https://thedogapi.com key. | Required for `/pictures cat` or `/pictures dog`, otherwise optional. |
   | GUILD_ID  | Server ID.                                          | Optional but recommended for testing/one server scenario.            |
4. On a command prompt/terminal window, `cd` to the folder containing the `docker-compose.yml` file.
5. Type `docker-compose up -d` and press Enter, Docker Compose will download the required files and run the bot for you.

**Note:** The `docker-compose.yml` file also include watchtower container for auto-updating. If you wish to manually update the bot, you can run `docker-compose pull` then `docker-compose up -d` again.

### Standalone production
1. Install [Node.js](https://nodejs.org/en/).

   **Note:** You also need the `npm` (Node Package Manager).

2. Clone this repository.
3. Create a `.env.production` file on the folder containing the cloned repository. See step 3 of [quickstart](#quickstart).
4. Open a command prompt.terminal window, `cd` to the folder containing the cloned repository, and execute `npm i`.
5. Once `npm i` is finished, run `npm start`. The bot will now run.

## Development version
1. Follow step 1 and 2 of [standalone production](#standalone-production).
2. Create a `.env.development` file on the folder containing the clone repository. See step 3 of [quickstart](#quickstart).

   **Note:** With the development version, **`GUILD_ID` is required**.

3. Open a command prompt.terminal window, `cd` to the folder containing the cloned repository, and execute `npm i`.
4. Once `npm i` is finished, run `npm run dev`. The bot will now run.

**Note:** With `npm run dev`, Node will track file changes and restart the bot once a file is changed.
