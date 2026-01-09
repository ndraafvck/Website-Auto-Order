export const KEYS = {
  pakasir: {
    project: "chandra",
    apiKey: "kMByTTyKnRwdSlqslqH9i3edC0sjFyYe",
    baseUrl: "https://app.pakasir.com/api",
  },

  pterodactyl: {
    domain: "https://private.ndraandree.my.id",
    apiKey: "ptla_XwDvTzcpznP60iZowUiTTlT0bbBEIDfJmtFdOJxNziZ",
    clientKey: "ptlc_ILUdwwaWfY9hMpahBgbumCtc1gO14XBvxHgvWVvSmqo",
    egg: 15,
    nestId: 5,
    locationId: 1,
  },

  digitalocean: {
    apiKey: "",
    region: "sgp1",
    image: "ubuntu-24-04-x64",
  },

  // MongoDB Atlas (backend only)
  mongodb: {
    uri: "mongodb+srv://candrajagatsaksena_db_user:0MJGOQKhTeZHjF2A@cluster0.y1fklt7.mongodb.net/?appName=Cluster0", // contoh: mongodb+srv://user:pass@cluster0.xxxx.mongodb.net/?appName=Cluster0
    dbName: "shop",
    ordersCollection: "orders",
  },

  // Telegram (backend only)
  telegram: {
    botToken: "8129299272:AAFz7ZhH4ZV-et1oNE9fOjlW0WjqwWyIS7E",      // contoh: 123456:ABC-DEF...
    ownerChatId: "8218627647",   // contoh: 123456789
    channelChatId: "1003165606817", // contoh: -1001234567890 atau @usernamechannel
    websiteUrl: "https://yuvangeksa.vercel.app", // untuk ditampilkan di struk
  },
};
