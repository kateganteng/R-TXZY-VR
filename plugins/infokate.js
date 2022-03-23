let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Kate Ar Rawawie
│ ✎ _Umur_ : 23
│ ✎ _Asal_ : Cengkareng, JKT Barat
│ ✎ _Status_ : Pacaran/Bekerja
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN
│ ✎ _Official Grup 3_ :
│    https://chat.whatsapp.com/HcGcIB09sIvKrGytO8yfFn
│ ✎ _WhatsApp_ :
│    wa.me/6285954944195
╰───────────────────
`.trim(), m)
}

handler.help = ['infokate']
handler.tags = ['main', 'utama']
handler.command = /^(infokate)$/i

handler.exp = 150

module.exports = handler
