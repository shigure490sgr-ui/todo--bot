const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
  new SlashCommandBuilder()
    .setName('todo')
    .setDescription('ToDoを追加する')
    .addStringOption(option =>
      option.setName('title')
        .setDescription('タスク名')
        .setRequired(true)
    )
    .toJSON()
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );
    console.log('Slashコマンド登録完了');
  } catch (error) {
    console.error(error);
  }
})();
