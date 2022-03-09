const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  let uname = conn.getName(m.sender)
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*_${usedPrefix}daftar ${namalu}.umur_*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 80) throw 'Sungkem Buyut'
  if (age < 3) throw 'Bayi bisa ngetik sesuai format?'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  user.serial = sn
  
  m.reply(`
Daftar berhasil!

┌─〔 Info 〕
│ Nama: ${name}
│ Umur: ${age} tahun
│ SN: ${sn}
└────
*_Simpan/Bintangi_* pesan ini karena Sn (Serial Number) digunakan untuk daftar ulang
`.trim())
u = 'S&K Untuk Melihat Syarat & Ketentuan\nMenu untuk menggunakan Bot'
await conn.send2Button(m.chat, u, footer, 'S&K', '#rules', 'Menu', '#menu', m)
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler