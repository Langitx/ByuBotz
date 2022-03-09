let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
heum = await fetch(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=KurrXd`)
   if (!heum) throw json
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Sangat luxu', footer, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke|jokes)$/i

module.exports = handler
