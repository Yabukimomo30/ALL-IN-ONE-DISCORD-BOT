const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Earl`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `Jarlssen`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `The Universe`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[My website](https://guns.lol/unibypasser)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
