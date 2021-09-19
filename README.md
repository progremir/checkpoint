# GamersList

Keeps track of your gaming list.

# Installation and local launch

1. Clone this repo: `git clone https://github.com/progremir/gamers-list-bot`
2. Launch the [mongo database](https://www.mongodb.com/) locally
3. Create `.env` with the environment variables listed below
4. Run `yarn install` in the root folder
5. Run `yarn develop`

And you should be good to go! Feel free to fork and submit pull requests. Thanks!

# Environment variables

- `TOKEN` — Telegram bot token
- `MONGO`— URL of the mongo database
- `TWITCH_CLIENT_ID` - Twitch client ID
- `TWITCH_APP_ACCESS_TOKEN` - Access code of the created Twitch app

Also, please, consider looking at `.env.sample`.

# License

MIT — use for any purpose. Would be great if you could leave a note about the original developers. Thanks!
