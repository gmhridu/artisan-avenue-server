const mongoose = require('mongoose');

// connecting to MongoDB
const ConnectDB = (url) => {
  mongoose.connect(url)
    .then(() => {
    console.log('MongoDB connected');
    })
    .catch(() => {
      console.log('MongoDB not connected');
      
  })
}

module.exports = ConnectDB;