const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

// process.on('unhandledRejection', err => {
//   console.log(err.name, err.message);
//   console.log('BOOM!');
//   // server.close(() => {
//   process.exit(1);
//   // });
// });
// console.log(process.env.DATA_PASSWORD);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATA_PASSWORD
);
// console.log(DB);
/**
 * 連結資料庫
 */
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app is running ${port}`);
});
