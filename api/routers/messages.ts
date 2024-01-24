import express from 'express';
import { MessageData } from '../types';
import { fileDB } from '../Data/fileDB';

export const messagesRouter = express.Router();

messagesRouter.post('/', async (req, res, next) => {
  try {
    const message: MessageData = {
      author: req.body.author === '' ? 'Anonymous' : req.body.author,
      message: req.body.message,
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
