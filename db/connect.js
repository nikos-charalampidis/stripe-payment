const mongoose = require('mongoose')

// connect to mongoose database 
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, // Use the new URL string parser
    useCreateIndex: true,  // Use the new index creation mechanism
    useFindAndModify: false, // Use the new find and modify functions
    useUnifiedTopology: true, // Use the new topology engine
  });
};

module.exports = connectDB
