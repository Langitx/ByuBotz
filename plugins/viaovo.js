let handler = async (m, { conn }) => {
	conn.reply(m.chat, `Via Ovo : Nothing`.trim(), m)
}

handler.command = /^viaovo$/i

module.exports = handler
