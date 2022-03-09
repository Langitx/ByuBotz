let handler = async (m, { conn }) => {
	conn.reply(m.chat, `Telkomsel : 081297084552`.trim(), m)
}

handler.command = /^viapulsa$/i

module.exports = handler
