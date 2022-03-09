let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'payment')).buffer(), `
┌ Payment 
├ Dana: 081297084552
└────

- Kirim bukti ke owner, Kirim link grub kamu\n
`.trim(), footer, 'Owner', '.owner')
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^payment$/i

module.exports = handler
