import {configureStore} from "@reduxjs/toolkit";
import {messagesFormReducer} from "../components/MessageFrom/messagesFormSlice.ts";

export const store = configureStore({
  reducer:{
    messagesForm: messagesFormReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;