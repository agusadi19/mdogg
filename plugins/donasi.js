let handler = async m => m.reply(`
            .✵.GRUB RPGXBOT.✵.

            https://chat.whatsapp.com/Lo72aOgbVvCAoMSlzFRk0S
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler