import React, { FC } from 'react';
import { IMessages } from '@/types';
import { CircularProgress, Grid, Typography } from '@mui/material';
import MessagesItem from '@/components/Messages/MessagesItem';

const Messages: FC<IMessages> = ({ messages, isLoading }) => {
  const empty = <Typography>No messages! Type something!</Typography>;
  let messagesContent: React.ReactNode = <CircularProgress />;

  if (!isLoading) {
    if (messages.length === 0) {
      messagesContent = <Typography>No messages! Type something!</Typography>;
    } else {
      messagesContent = messages.map((item) => (
          <MessagesItem
              message={item.message}
              author={item.author}
              date={item.date}
              key={item.id}
          />
      ));
    }
  }

  return (
      <Grid container direction="column" sx={{ pt: 5 }} spacing={2}>
        {messagesContent}
      </Grid>
  );
};

export default Messages;
