//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': '92170802cb1a', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = process.env.OWNERNUMBER|| ['94702288014']
global.premium = ['94702288014']
global.ownernomer = '94702288014'
global.ownername = process.env.OWNERNAME|| '🇱🇰⚓️𝚂𝙻 𝙽𝙰𝚅𝙸𝚈𝙰👨‍💻 ⸸ '
global.botname = process.env.BOTNAME|| '🇱🇰⚓️𝚂𝙻𝙽𝚊𝚟𝚒𝚢𝚊-𝙱𝚘𝚝🤖⸸ '
global.footer = process.env.WATERMARK|| '🇱🇰⚓️𝚂𝙻 𝙽𝙰𝚅𝙸𝚈𝙰🤖 ⸸ '
global.ig = process.env.IG|| 'https://github.com/SLNaviya'
global.region = 'sri lanka, rathnapura province, godakawela'
global.sc = 'https://github.com/'
global.myweb = 'https://sites.google.com/view/slnaviyaofficial'
global.group = process.env.GROUP|| 'https://chat.whatsapp.com/JwbAco03xXr970fBIpwroS'
global.packname = 'Sticker'
global.reactmoji = "😘" //ur menu react emoji
global.author = process.env.AUTHER|| '⛧ 𝚂𝙻 𝙽𝙰𝚅𝙸𝚈𝙰 ⸸ '
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In Process...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',

}

global.thumbt = fs.readFileSync('./lib/ab67616d0000b273e10e2e89ef9b6516991eb36c.jpg')
global.visoka = { url: 'https://telegra.ph/file/39c0aba89c1281605b7de.mp4' }
global.thumb = fs.readFileSync("./sathan.jpg") //ur thumb pic
global.thum = fs.readFileSync("./sathan.jpg") //ur thumb pic

    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./sathan.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
