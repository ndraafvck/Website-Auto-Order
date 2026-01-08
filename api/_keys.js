export const KEYS = {
  pakasir: {
    project: "ndraacloud",
    apiKey: "Ruf6e3UgmLQXmM9W9o0U8uXrvuWHDi0H",
    baseUrl: "https://app.pakasir.com/api",
  },

  pterodactyl: {
    domain: "https://private.ndraandree.my.id",
    apiKey: "",
    clientKey: "",
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
    uri: "mongodb+srv://candrajagatsaksena_db_user:<db_password>@cluster0.aghcobf.mongodb.net/?appName=Cluster0", // contoh: mongodb+srv://user:pass@cluster0.xxxx.mongodb.net/?appName=Cluster0
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
