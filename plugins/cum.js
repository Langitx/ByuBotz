let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
m.reply(wait)
heum = await fetch(`https://api.lolhuman.xyz/api/random2/cum?apikey=${lolkey}`)
   if (!heum) throw json
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, kasihcaption, footer, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['cum']
handler.tags = ['hentai']

handler.command = /^(cum)$/i
handler.limit = true
handler.premium = true

module.exports = handler
