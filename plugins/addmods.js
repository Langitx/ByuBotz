let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag orangnya!`
    if (global.owner.includes(who.split`@`[0])) throw 'dia udah moderator!'
    global.mods.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} Sekarang Moderator!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addmods [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)mods$/i

handler.rowner = true

module.exports = handler
