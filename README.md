# Announcement Channel Moderation Bot

This Telegram bot is designed to moderate public announcement channels, ensuring that only authorized users can post messages. It automatically deletes messages sent by users who are not on the allowed list, maintaining the channel's focus on official announcements.

## Features

- **Message Filtering:** Automatically deletes messages from users not included in the predefined allowed list.
- **Customizable Allowed List:** Easily specify which users are permitted to post messages in the announcement channel.
- **Simple Setup:** Quick and easy setup process to integrate the bot into your channel.

## Setup

1. **Create a Bot:**
   - Use [BotFather](https://t.me/botfather) to create a new Telegram bot. Follow the instructions to get a bot token.

2. **Install Dependencies:**
   - Ensure Node.js is installed on your system.
   - Install the necessary NPM packages by running:
     ```bash
     npm install telegraf
     ```

3. **Configuration:**
   - Open the bot's script and replace `'BOT_TOKEN'` with the token you received from BotFather.
   - Modify the `allowedUsernames` array to include the usernames of users allowed to post messages.

4. **Launch the Bot:**
   - Run the bot by executing the script:
     ```npm start``` (npm defaults to `server.js`) or  ```node server.js``` (if npm start doesn't work)

5. **Add the Bot to Your Channel:**
   - Add the bot as an administrator to your Telegram channel.
   - Ensure it has permissions to delete messages.

## Usage

Once set up, the bot will automatically monitor messages in the channel. If a message is posted by a user not in the `allowedUsernames` array, the bot will delete it immediately.

## Customization

- **Allowed Users:** You can update the `allowedUsernames` array in the script to change who is allowed to post messages.

## Contributions

Contributions are welcome! If you have suggestions or improvements, please submit a pull request or open an issue.

## Support

If you encounter any problems or have questions, please open an issue on the project's GitHub page.

## License

This bot is released under the MIT License.
