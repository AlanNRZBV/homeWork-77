import React from 'react';
import { Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Send } from '@mui/icons-material';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {messagesFormState, postMessage} from "./messagesFormSlice.ts";
import FileInput from "../UI/FileInput/FileInput.tsx";
import {uploadMessage} from "./messagesFormThunks.ts";


const MessagesForm = () => {

  const dispatch = useAppDispatch();
  const message = useAppSelector(messagesFormState )

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(uploadMessage(message))
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = {
      key: e.target.name,
      value: e.target.value,
    };
    dispatch(postMessage(userInput))
  };


  return (
      <form onSubmit={onSubmit}>
        <Grid container direction="column" sx={{ border:1 }}>
          <Grid item sx={{ mb: 2 }}>
            <TextField
                required
                id="author"
                label="Author"
                name="author"
                onChange={inputChangeHandler}
            />
          </Grid>
          <Grid container item justifyContent="space-between" alignItems="center">
            <TextField
                required
                id="message"
                label="Message"
                name="message"
                onChange={inputChangeHandler}
                sx={{ maxWidth: '75%' }}
            />
            <FileInput onChange={inputChangeHandler} name="image" label="Message image"/>
            <LoadingButton
                type="submit"
                color="primary"
                variant="contained"
                startIcon={<Send />}
            >
              Send
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
  );
};

export default MessagesForm;
