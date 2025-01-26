module.exports = async (context) => {
  const { client, m } = context;

  // Sound file URLs
  const audioFiles = [
    'https://files.catbox.moe/m9nols.mp3',
    'https://catbox.moe/6wiz8h.mp3',
    'https://catbox.moe/ibylon.mp3',
    'https://catbox.moe/zz58er.mp3',
    'https://files.catbox.moe/tgjtmi.mp3',
    'https://files.catbox.moe/eenv10.mp3',
    'https://files.catbox.moe/8ceyna.mp3',
    'https://files.catbox.moe/uuha0e.mp3',
    'https://files.catbox.moe/107167.mp3',
    'https://files.catbox.moe/3308e7.mp3',
    'https://files.catbox.moe/fd95fn.jpg'
  ];

  // Randomly pick an audio file
  const vn = audioFiles[Math.floor(Math.random() * audioFiles.length)];

  // Other variables
  const name = m.pushName || client.getName(m.sender);
  const url = 'https://www.tiktok.com/@arslan_chaudary_701?_t=ZS-8tO52elZbyU&_r=1';
  const murl = 'https://whatsapp.com/channel/0029Vat4TFC0QeaoLURbP61u';
  const img = 'https://files.catbox.moe/j3j6pn.jpg';

  // Constructing the contact message
  const con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split('@')[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '254748387615@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: name,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };

  // Audio file message with external ad reply info
  const doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'shizo',
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '𝐇𝐞𝐲 𝐇𝐚𝐧𝐝𝐬𝐨𝐦𝐞!𝗜 𝗔𝗠 𝗔𝗟𝗜𝗩𝗘 ',
        body: 'Regards 𝘼𝙧𝙨𝙡𝙖𝙣 𝘾𝙝𝙖𝙪𝙙𝙖𝙧𝙮',
        thumbnailUrl: img,
        sourceUrl: murl,
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };

  // Send the message
  await client.sendMessage(m.chat, doc, { quoted: con });
};
