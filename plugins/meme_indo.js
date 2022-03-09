let handler = async (m, { conn }) => {
    conn.sendImg(m.chat, global.API('https://api.zeks.me/api/memeindo?apikey=apivinz'), '', '', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['memeindo']
handler.tags = ['internet']
handler.command = /^(memeindo)$/i

module.exports = handler