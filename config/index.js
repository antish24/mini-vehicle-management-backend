const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8800,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET:process.env.JWTSECRET,
  expiresIn:process.env.EXPIREDIN , // Token expiration time
  // smsUser:process.env.SMSUSER , // Token expiration time
  // smsPassword:process.env.SMSPASSWORD , // Token expiration time
};