const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8800,
  MONGODB_URI:"mongodb+srv://Ish:ycDx5HriscAeF61w@miniapp.61vbg.mongodb.net/?retryWrites=true&w=majority&appName=Miniapp",
  JWT_SECRET:process.env.JWTSECRET,
  expiresIn:process.env.EXPIREDIN , // Token expiration time
  // smsUser:process.env.SMSUSER , // Token expiration time
  // smsPassword:process.env.SMSPASSWORD , // Token expiration time
};
