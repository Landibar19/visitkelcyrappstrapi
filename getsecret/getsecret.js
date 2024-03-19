const crypto = require('crypto');
<<<<<<< HEAD
const secret = crypto.randomBytes(16).toString('base64');
console.log(secret);
=======

const salt = crypto.randomBytes(16).toString('base64');

console.log(salt);
>>>>>>> 4025954871faeec7520438c90864203025b334a5
