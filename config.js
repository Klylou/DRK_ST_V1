//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://sten_4ldx_user:9o1M5XMhT9FutGJ7gN1S90S39i9C0pQQ@dpg-cqr69ng8fa8c73foguig-a.oregon-postgres.render.com/sten_4ldx";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Dark-S-TEN/DRK_ST_V1/tree/main";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05ua1BiUXA1NnZwN1JjMGl0NFQwNlBVUzhiYnMybyt3M1c5MUZ2bGdGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE95ZENxZ2VtRkZkNG01d1ZpR2dPUkFQV05UeU0vYzZ5SlFtMXA3QkFtaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT2dYdk1CVDNpQlVzU281ZWtRQTd1dWZFTXB3QlU1QTdkTnI2MzFRV0ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJna2NrY25aUFFuMTZrVHVkSElRcGVvdFg3OVdaak0rZnNvMWYycGRRK0VNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Db1JGa2Zud0RMbjdqMW84Nm5QMUpmUk5yODZvamNuWjJGblE0V3MwMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdINTQzdkNGN3QzemZHKzk4V2txb3F0dDhYVHg5S3Y0SkZWTUtocEU5eVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExnTFZYQVZvRDU3ckVKa1RqZmptM2VEdHZ5NEJtMEtpSEl6UkZyMW5IOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVlGWGZMWUVwKzVWSnA1Vi94bk1NanpzNi85cEprQ3Z5SG9CdlVPNC9Sbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBUejY5NGtBSmFjY1BscTRLUmQxTE1GMDgvcncvWG16YjBXZnpqeGJCbWRkYVIwaDhkOUFwZHZ4d0FzMnA0Z0Y4Mmd5VlRoYjRBL2I3eXEvTklhb2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiIrMmFzKzUvLzZha1NoSmJzUnk1Rk9lQXhCVzZSVE1YQ2FBcktBK0xBbkdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4Mm5YWEJSU1FQNm5Qc2pLdUdKU05nIiwicGhvbmVJZCI6Ijk5YmZjMjBiLTYyZGQtNDVmYi1hMDJkLWQ3MDQ1MDRjZmEzNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6aFhVcFYyeklXbEkrbTJISVFvZHMvcGJQenc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3pFUU1MaTFQTjFGTmZLQmFlcW1sdU1rUWZFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldWWFlQRzRYIiwibWUiOnsiaWQiOiI1MDk0MDkzMzYyNTozMkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHZ1MWVNSEVMdjRnN1lHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibnVDeGVZYThkYld3SURwTXRWNmtUd3lvbjgwMFB1RVdIelR6QndjWTVpUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRkprMDJzbitSVlQ3bkpNMVAvbWFKVC9heXVPWVllSUF3MzFKdFdRL3dyY0tTNE82V0tlYm1rd3E1OXVLUmZUQUZqU2ZEM2IyY2d6RlBUU0xBejFjRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImRpVEhtdGVRSTlTbExNaXFjMVVESGhrU3IydkxMWjRtM0NyRmh2VnV5WTNjcGxNVE5Gb3FGODRpZzgxQmJKdUlUYUNwbk5pQUw2MjFvYjhzR3RLR2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDA5MzM2MjU6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjdnc1htR3ZIVzFzQ0E2VExWZXBFOE1xSi9OTkQ3aEZoODA4d2NIR09ZayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzkyMzUyOH0=
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in DRK_ST_Tech| enjoy your time| this is DRK_ST_V1",
  author: process.env.PACK_AUTHER || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  packname: process.env.PACK_NAME || "🤫",
  botname: process.env.BOT_NAME || "DRK_ST_V1",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
