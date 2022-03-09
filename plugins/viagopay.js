let handler = async (m, { conn }) => {
	conn.reply(m.chat, `Via Gopay : Nothing`.trim(), m)
}

handler.command = /^viagopay$/i

module.exports = handler
