const crypto = require('crypto');
const secret = crypto.randomBytes(16).toString('base64');
console.log(secret);