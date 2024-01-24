import express from 'express';
import { MessageData } from '../types';
import { fileDB } from '../Data/fileDB';

export const messagesRouter = express.Router();

messagesRouter.post('/', async (req, res, next) => {
  try {
    const message: MessageData = {
      author: req.body.author,
      message: req.body.message,
    };

    if (!message.message || !message.author) {
      return res
        .status(422)
        .send({ error: 'Author or message must be present' });
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
    const queryDate = req.query.datetime as string;
    const date = new Date(queryDate);

    if (isNaN(date.getDate()) && queryDate !== undefined) {
      res.status(400).send('Bad date');
    } else if (queryDate) {
      const newMessageIndex = messages.findIndex(
        (item) => item.date === queryDate,
      );
      const newMessages =
        newMessageIndex !== -1 ? messages.slice(newMessageIndex + 1) : [];
      res.send(newMessages);
    } else {
      res.send(messages);
    }
  } catch (e) {
    next(e);
  }
});
