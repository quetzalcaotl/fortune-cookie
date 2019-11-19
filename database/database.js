const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cookies', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const cookiesSchema = new mongoose.Schema({
  proverb: {
    type: String,
    index: true,
    unique: true,
  },
  lesson: {
    english: String,
    chinese: String,
    pinyin: String,
  },
  lotteryNumbers: [Number],
});
const Cookie = mongoose.model('cookie', cookiesSchema);

const newCookie = (cookie, callback) => {
  const newCookie = new Cookie(cookie);
  newCookie.save((error, data) => {
    if (error) return callback(error);
    callback(null, data);
  });
};

const getRandomCookie = (callback) => {
    Cookie.aggregate([{ $sample: { size: 1 }}], (error, data) => {
      if (error) return callback(error);
      callback(null, data);
    });
};

module.exports = {
  db,
  newCookie,
  getRandomCookie,
}
