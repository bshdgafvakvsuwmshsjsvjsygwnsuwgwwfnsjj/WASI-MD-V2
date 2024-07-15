//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
global.devs = "94715141596";
global.sudo = process.env.SUDO || "94715141596,94715141596";
global.owner = process.env.OWNER_NUMBER || "94715141596";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBaOXJwNk9Zdldud1JONk9UMC9XblprOXF5UGl5MGphYVVjeE9VTmFuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiam5ZYUp1eTBBaEgwQXAvUnFISzZMMndFQjBUTFhCOXhqYVFYQnB3a0ZWWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUDcydStLMnhaQ1BiZ1RuVVkzU2RJK05CY2dRcmlXZU9TcDQ0Q2RlRVZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1MTJXUW96dUZybkRqL21Fa3JReGQ1NVQvQUlRZ2JTYjlZZmpBNS9IdG5RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKMklpbGpOSmo4b0lQeUp1SnByanRGMWhVdDd3UnJhc3Z4WkR5SDNCbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InduL0dDSG5sU2FGdUhiTHMzY0R2UUVGb2pyWG1RcHkwMitrYjVYRkJBa3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xycHF6SExYemFpTVpuZXMrUUZlMjlUZ255M2hHY1BSeWErUFVZdUEzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEdhaHRTd3A1bkx1Y3ZNWmhFM0tyMjNtT2N6N1NPZkhLbVloY3h0eVZETT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklxNlFUL1FPbktvbkIzdW9pRjdLQm5KKzN5a2dQRkhzT3lqMTg2TjQ5T2JsTTlVdzZpam00MmNjeEcxNlBQMG1qNmtwSlI4UjF3bjhmL05TOWZVYmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJ0N2wzbm1Xb1F2Zk95dXJLZG01SDNwMnVZcVFwRndac1FjZlgrTVQ4QlFzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1MTIwMjA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUyRTgyQkIyMDgwQ0JDMUY0OTM2MkI0NzFCN0JDQzdBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEwMTMxNjV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1MTIwMjA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVFMjIzMkYyRjRCNUZCNTBFM0EyMzAwREEyQUU4NTJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEwMTMxNjZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InlzdUJ3d2g3VEdHRUcyZ2Nyd21EQ3ciLCJwaG9uZUlkIjoiZjExZDYwZWEtZGQxMC00OTc3LTg1YjctODM0MzFlYzM3NWU3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlLTkRkM3FYZFVwZWZCQjNpbmpRamxBalYxZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqOEplWnhKbS9XdmZjbjVRNk9INEpVMGhZUjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEw3NTRORFEiLCJtZSI6eyJpZCI6Ijk0Nzc1MTIwMjA1OjYyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRoaWxhayBLdW1hcmEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05UVHo1NERFSjZuMHJRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5lazJhVy9RcUtRUkJsNlNkWUJBaXl6U081RUpMdThDdzEySkd3aFR5bG89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhBTXEzaUtNSTdMejVUa2E0cHRQVW1YR09yMkVOdGF0UmFxSENXNGY2YmplZTVGMTFFck1qczkvcVNjQ0I1dTFTZ3dHQ3dDdHI0Q09HTHVnYklhckJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGNlhHcUl4SCtOcTRoRFBQVXlHZGdGY1pMU0ViZ2JwbEo0ZWpYVS9IRFlLb0I2OVl2VFo5YjN0ZEZCS0I4c21IL3IxbnJyQ1pOL0FDK3BGMG9yVkNodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc1MTIwMjA1OjYyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlozcE5tbHYwS2lrRVFaZWtuV0FRSXNzMGp1UkNTN3ZBc05kaVJzSVU4cGEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjEwMTMxNjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3ptIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
