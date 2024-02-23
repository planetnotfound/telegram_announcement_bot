const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
// the messages of thsoe usernames won't be deleted
const allowedUsernames = ['username1', 'username2', 'username3'];

bot.on('message', (ctx) => {
  const username = ctx.message.from.username;
  if (!allowedUsernames.includes(username)) {
    ctx.deleteMessage(ctx.message.message_id).catch((err) => {
      console.log(`Error deleting message: ${err}`);
    });
  }
});

bot.launch();
