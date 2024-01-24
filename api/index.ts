import express from 'express';
import cors from 'cors'
import { messagesRouter } from './routers/messages';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use('/messages', messagesRouter);

app.listen(port, () => {
  console.log(`Server start on port: ${port}`);
});
// const run = async () => {
//   await fileDB.init();
//
// };
//
// void run();