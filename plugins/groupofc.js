let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Group Official')).buffer(), `
「 ByuBotz Group Official 」
Grup :
https://chat.whatsapp.com/BDhvAxeGwFjGj10KdQMunR

Kalau linknya gak valid/direset hubungi owner
Be A Smart People
`.trim(), footer, 'Sewa bot', '.sewa', m)
handler.help = ['grupbot']
handler.tags = ['info']
handler.command = /^(gcbot|grupbot|groupbot)$/i

module.exports = handler