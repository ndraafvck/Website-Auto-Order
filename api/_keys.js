export const KEYS = {
  pakasir: {
    project: "ndraacloud",
    apiKey: "Ruf6e3UgmLQXmM9W9o0U8uXrvuWHDi0H",
    baseUrl: "https://app.pakasir.com/api",
  },

  pterodactyl: {
    domain: "https://private.ndraandree.my.id",
    apiKey: "ptla_5OxGnvYlAUZWvdkAxxftourGFF2I7E5VqOUv0uHkbpM",
    clientKey: "ptlc_rvdAUzrzlR6uDuEVlAS3y5vAvQYE2gi0eRD29vqxtlj",
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
    uri: "mongodb+srv://candrajagatsaksena_db_user:NomS4e0fxLaDhphm@cluster0.i4tyyem.mongodb.net/?appName=Cluster0", // contoh: mongodb+srv://user:pass@cluster0.xxxx.mongodb.net/?appName=Cluster0
    dbName: "shop",
    ordersCollection: "orders",
  },

  // Telegram (backend only)
  telegram: {
    botToken: "7965702038:AAFnEsc3piceqge8mpQtDzStYammg2DZ_vk",      // contoh: 123456:ABC-DEF...
    ownerChatId: "7810572898",   // contoh: 123456789
    channelChatId: "-1002841046280", // contoh: -1001234567890 atau @usernamechannel
    websiteUrl: "https://ndraacloud.vercel.app", // untuk ditampilkan di struk
  },
};