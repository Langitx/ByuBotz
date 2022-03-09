let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Rest Api')).buffer(), `
Rest Api Yang ByuBotz Gunakan:
  https://nurutomo.herokuapp.com
  https://api.xteam.xyz
  https://zahirr-web.herokuapp.com
  https://api.lolhuman.xyz
  https://dhnjing.xyz
  https://bx-hunter.herokuapp.com
  https://melcanz.com
  https://venz-api.herokuapp.com
  https://api.zeks.me
  https://pencarikode.xyz
  https://leyscoders-api.herokuapp.com
`.trim(), footer, 'Owner', '.owner')
handler.help = ['restapi']
handler.tags = ['info']
handler.command = /^rest(api)$/i 

module.exports = handler
