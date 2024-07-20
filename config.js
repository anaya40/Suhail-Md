const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_53_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDUwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICA4LFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjExLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDk4LFxuICAgICAgICA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDM4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWNExWTDVKK3AvSUMvQTlVeU5HdFowU3RxNU55a2J3TEhFZUtZVHd6S0M4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJud0YzUHE5bFNqYUNHRFM4QnlmaVlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJhYzUxOWI3LTYxMzUtNDBlZi1iY2VhLTM1NjYyMjc4OTdmMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxMDUsXG4gICAgICAyLFxuICAgICAgMTMyLFxuICAgICAgMTk3LFxuICAgICAgMzAsXG4gICAgICAyMzMsXG4gICAgICAxMzcsXG4gICAgICA4MyxcbiAgICAgIDIxNixcbiAgICAgIDU3LFxuICAgICAgMTU1LFxuICAgICAgMTQyLFxuICAgICAgMTUyLFxuICAgICAgMTQsXG4gICAgICAxMDIsXG4gICAgICAyNDAsXG4gICAgICAxNzgsXG4gICAgICAyMjQsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMTc2LFxuICAgICAgNDMsXG4gICAgICAyMjgsXG4gICAgICAyNDEsXG4gICAgICAyOCxcbiAgICAgIDI1MixcbiAgICAgIDExNSxcbiAgICAgIDEyMixcbiAgICAgIDE3MSxcbiAgICAgIDc3LFxuICAgICAgNixcbiAgICAgIDU3LFxuICAgICAgMTY5LFxuICAgICAgMTE0LFxuICAgICAgMjEwLFxuICAgICAgMjMzLFxuICAgICAgMTU1LFxuICAgICAgMjEyLFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJKN1c4MTVaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwODg1NTI5NDQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE2MjQ3MzA4NDM5NjA4OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHZLMGVNQ0VLQ3U3clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjd3RuR1hDSFplTGJ5eUdISXU0V2pVOXJ6bzdFZ3BteU95anV5aHdWbUYwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjk5UE5Na2h1b0twaE1iazJjUWZpcmQ4MzMvcnZwcTB0eDNTYVo3L2ZMOGR3RnptcXlqbi9iS2pNUjZ3TitQSUVyQmhiemRua3UrSnIrQ244U1hrMERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhzZXUzZzJOaFd4M0JUbG5hcTJSc2Y3SS9PT2Z6ckw0ZlVxalJoRjRtakMrTUNCTHdxTTBDdzdub3ZZK1pJV0psTWRmeHRQbmpPczRoNTRPNW1pdGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA4ODU1Mjk0NDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ3MjgwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1TaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVNoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWlozcjRNOUlIa2J6Rzl1MnZ2WlU0eVlYWmI5Y3ZFUDl3SkhlQ1JQSTlQbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NDU4MjU1OTQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NzE5NTIwNDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
