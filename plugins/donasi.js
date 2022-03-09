//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌〔 Donasi • Emoney 〕
├ Dana: 081297084552
├ Donasi? Hubungi Owner!
└────

Pertanyaan Yang Sering Diajukan:
Q: "Uang Donasi Untuk Apa?"
A: "Untuk Memperpanjang Masa Server"
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
