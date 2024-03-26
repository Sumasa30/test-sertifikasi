const mongoose = require('mongoose');

// URL MongoDB lokal
const mongoURI = 'mongodb://localhost:27017/TestSertif';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB terhubung...');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// komang
