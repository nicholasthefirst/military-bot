const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('announce')
        .setDescription('Send a military announcement')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Announcement message')
                .setRequired(true)
        ),

    async execute(interaction) {
        const message = interaction.options.getString('message');

        await interaction.reply(`📢 **MILITARY ANNOUNCEMENT**\n${message}`);
    }
};
