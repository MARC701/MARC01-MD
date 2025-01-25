/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'xxhyWTgT#aBR7sGS56HwoL6S8qhWi1vPIFpCmh8BFQ8bmjJoMlwU';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "92";
const author = process.env.STICKER_AUTHOR || '𝘼𝙧𝙨𝙡𝙖𝙣 𝘾𝙝𝙖𝙪𝙙𝙖𝙧𝙮';
const packname = process.env.PACKNAME || '𝙈𝘼𝙍𝘾';
const dev = process.env.DEV || '923111977378';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || '𝙈𝘼𝙍𝘾-𝙈𝘿';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'typing';

const antitag = process.env.ANTITAG || 'false';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'false';
const antilink = process.env.ANTILINK || 'false';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'false';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
