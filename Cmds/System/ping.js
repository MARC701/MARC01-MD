module.exports = async (context) => {
    const { client, m, Keithspeed } = context;

    try {
        // Prepare the response text with speed data
        const menuText = `🅼🅰🆁🅲 🆂🅿🅴🅴🅳\n${Keithspeed.toFixed(4)}𝐌\𝐒`;

        // Send message with contextInfo and mention the sender
        await client.sendMessage(m.chat, {
            text: menuText,
            contextInfo: {
                mentionedJid: [m.sender], // Mention the sender
                externalAdReply: {
                    title: "🌟 𝙈𝘼𝙍𝘾-𝙈𝘿 ✨",
                    body: "𝐫𝐞𝐠𝐚𝐫𝐝𝐬 𝘼𝙧𝙨𝙡𝙖𝙣 𝘾𝙝𝙖𝙪𝙙𝙖𝙧𝙮",
                    sourceUrl: "https://whatsapp.com/channel/0029Vat4TFC0QeaoLURbP61u",
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        });
    } catch (error) {
        console.error("Error sending message:", error);
        m.reply('An error occurred while sending the menu.');
    }
};
