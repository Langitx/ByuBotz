let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
Ikuti Sosial Media Owner Yaa

- Instagram: https://instagram.com/imbyu_ofc

- GitHub: https://github.com/imbyu

- YouTube: https://youtube.com

`.trim(), footer, 'Owner', '.owner')
handler.help = ['sosmed']
handler.tags = ['info']
handler.command = /^sosial(media)$/i

module.exports = handler
