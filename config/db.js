const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://Ish:ycDx5HriscAeF61w@miniapp.61vbg.mongodb.net/?retryWrites=true&w=majority&appName=Miniapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connection successful');
}).catch((error) => {
  console.log('Database connection error:', error.message);
});

module.exports = mongoose.connection;