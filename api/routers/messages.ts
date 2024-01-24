import express from 'express';
import { MessageData } from '../types';
import { fileDB } from '../Data/fileDB';
import { imagesUpload } from '../multer';

export const messagesRouter = express.Router();

messagesRouter.post('/',imagesUpload.single('image'), async (req, res, next) => {
  try {
    const message: MessageData = {
      author: req.body.author === '' ? 'Anonymous' : req.body.author,
      message: req.body.message,
      image: req.file ? req.file.filename : null
    };

    if (!message.message) {
      return res
        .status(422)
        .send({ error: 'Message must be present' });
    }

    await fileDB.addItem(message);

    return res.send('OK');
  } catch (e) {
    next(e);
  }
});

messagesRouter.get('/', async (req, res, next) => {
  try {
    const messages = await fileDB.getItems();

      res.send(messages);
  } catch (e) {
    next(e);
  }
});
