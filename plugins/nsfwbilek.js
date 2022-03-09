let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {
m.reply(wait)
  let res = await fetch('https://venz-api.herokuapp.com/api/nsfw/ahegao?apikey=VenzKey')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Error!'
  conn.sendFile(m.chat, json.result, '', kasihcaption, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
//conn.sendFile(m.chat, json.result, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['ahegao']
handler.tags = ['nsfw']
handler.command = /^(ahegao)$/i

handler.premium = true
//ftwrr
module.exports = handler
