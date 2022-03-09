let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ Sewa Bot 30 Hari
├ Premium 30 Hari
├ Trial 3 Hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Dana: 081297084552
Minat? Hubungi Owner!
(Ketik .owner)
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '30 Hari', description: "Rp10.000\nSewa bot selama 30 Hari", rowId:".owner"},
        {title: '30 Hari', description: "Rp10.000\nUser Premium Selama 30 Hari.", rowId:".owner"},
        {title: 'Trial', description: "GRATIS\nBot gratis 3 Hari.", rowId:".join"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
