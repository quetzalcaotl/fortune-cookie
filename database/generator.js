const fs = require('fs');
const path = require('path');

// const sampleLessons = fs.createReadStream('./lessons.txt');
// const sampleFortunes = fs.createReadStream('./proverbs.txt');
const sampleCookies = fs.createWriteStream(path.resolve(__dirname, 'cookies.json'));

// Need to make 383 different cookies based on data
const allCookies = [];
let lessons = [];
let proverbs = [];
fs.readFile(path.resolve(__dirname, 'lessons.txt'), 'utf8', (error, sampleLessons) => {
  if (error) return console.error(error);
  lessons = sampleLessons.split('\n');
  // console.log(lessons);

  fs.readFile(path.resolve(__dirname, 'proverbs.txt'), 'utf8', (error, sampleProverbs) => {
    if (error) return console.error(error);
    proverbs = sampleProverbs.split('\n');

    let i = 0;
    const lastLessonRow = 383;
    while(i < lastLessonRow) {
      const lessonArr = lessons[i].split(',');
      const newLesson = {
        english: lessonArr[0],
        chinese: lessonArr[1],
        pinyin: lessonArr[2],
      }
      const newLotteryNumbers = new Set();
      do {
        newLotteryNumbers.add(random1 = Math.trunc(Math.random() * 60));
      } while (newLotteryNumbers.size < 6);

      const newCookie = {
        proverb: proverbs[i],
        lesson: newLesson,
        lotteryNumbers: [...newLotteryNumbers],
      }
      console.log(i, newCookie);
      allCookies.push(newCookie);
      i += 1;
    }

    sampleCookies.write(JSON.stringify(allCookies), 'utf8', () => {
      sampleCookies.end();
    });
  });
});
// const newCookie = {
//   proverb: String,
//   lesson: {
//     english: String,
//     chinese: String,
//     pinyin: String,
//   },
//   lotteryNumbers: [Number],
// }
