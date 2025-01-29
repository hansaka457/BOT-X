 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "2347045035241","233268374753";
global.sudo = process.env.SUDO || "2347045035241","233268374753";
global.owner = process.env.OWNER_NUMBER || "2347045035241","233268374753";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1B5WjlONjFDdmtjWElBVlBveGloQlhpbG9GN25MQU0vSlc1aUl4aVRYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlRBMzZWSjUzZ203N2tBQXhrQ2g4cWZiZFd5aE05UUFSVGxPYmJSTC9SST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUGQ4S0FRV2FkdWhNbWhEa3lTRnBYczdUT1plWGVEMUttaHVaeWgrcEhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGQXB5U3pIeDg5VVdQb0RwV2NLbUpyRHlPZWNGS2FMSzc4ZTZKNUZNVTBVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCQzAzYW1QR2VNRURhM0pPaTROZEduWm82M0FxNElFSTB4MjN2bERoSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhRUDJLSTg5aGJjTGdKTnVBc1F6K2ZGejlENjhERkhhMzFIb2hWYTJzQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RBZEZTM3pKYTcxNzhVWFJMK1lQa2QrMkZaVmtwcFJoY0R4SG01aWRWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTdEc01NU3R0M05ydmhvaVR6dnhJckZXT0xnck9JSVZJT3pzWEQ1MHZUaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNELy9qdHpxZGtGYTNqTWRybFFBNG05eW83WXdzR0RxTjZJei9DR2pQTFl3UU5uamtVR21BUENaeUZCeGRVZHBqeUVSYyt1dlRyZ3lpVEtTZ2dLZkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiIxbDBPM3ZJeU5RdlNMS1ZsUHVLaGMxTjAxR0gweVlZT0lJY1V2ckFlUC9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1MDYyNjA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFEODM1NzhEQURDNUNBNzFFNkI0MDI3QTY2M0ZERUQyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzgxMzEzNTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkF3bmpNSnJzU2FtY0V3RmpVaWsydXciLCJwaG9uZUlkIjoiNmI4NTlmZGEtNjBkMy00NTBhLWE0YmItOGY3Y2FmZDdiMzBmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InoxQlh0ZWIyQThUSzh5RG4wUFhZL21wRHZNMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNY1gxOFBXdWhvOEMvTjhKNDJ3U3RkUy9Wd009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkc4MlRQVE4iLCJtZSI6eyJpZCI6Ijk0Nzc1MDYyNjA4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiKiBNUiAuIHBvZGRpICoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tDWW9zc0JFSW1QNTd3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdONzZ1ZkdxNVpDalJ2aW85K2x0cWxpVVR0Zlp6c283dDFzT3c2VVJOV3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRMZG1lcGZmbUlPSnBVazZlOFZ2N1ErT0F0SjlsZW5wZ21RLzJCYm04SUZSRUxnTFlKUnhQbk0rUit0S0kzeDRqSEE1VW0xdERxMVlxaTNURS8vSENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqTmlZa1lQSnRlMDF6ZTU2TndnNFhGTGdIWmpnbmoxU1paTCtQQ09tZkI3WW1kRXJKVWcxWVpGZXlDR3I1blVCZG9nbzJrcHQwdUVjRXRNNkpZeWRCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc1MDYyNjA4OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmplK3JueHF1V1FvMGI0cVBmcGJhcFlsRTdYMmM3S083ZGJEc09sRVRWcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODEzMTM1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLYXgifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
