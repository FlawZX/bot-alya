const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6289510598381']
global.premium = ['6289510598381']
global.ownername = 'YogzFX'
global.botname = '𝒁𝒆𝒏𝒏𝑺𝒌𝒚-𝑩𝒐𝒕𝒛'
global.packname = 'Created By © 𝒁𝒆𝒏𝒏𝑺𝒌𝒚-𝑩𝒐𝒕𝒛'
global.gc = 'https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl'
global.linkyt = 'https://youtube.com/channel/UCAssIRzQX_Ohi1I8eWzcRxQ'
global.linkgc = 'https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl'
global.limitawal = '500'
global.author = '@YogzFX'
global.sessionName = 'zenn'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = 'terserah'
global.mess = {
    success: 'Done Ngab!',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Proses Ngab Sabar!',
    endLimit: 'Limit Harian Lu Udah Abis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.gambar = 'https://telegra.ph/file/9afce15b2f783eeb1c647.jpg' //disini gambar bot nya lu bisa ganti pink gambar ini dengan link gambar punya lu
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
