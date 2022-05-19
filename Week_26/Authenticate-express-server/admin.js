const admin = require('firebase-admin');

const serviceAccount = require("./MIT-Auth-Routes.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;