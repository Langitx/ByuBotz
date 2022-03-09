let handler = async (m, { conn }) => {
	conn.reply(m.chat, `Via Dana : 081297084552`.trim(), m)
}

handler.command = /^viadana$/i

module.exports = handler
