import {MessageWithoutId} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";

interface MessagesFormState {
  message:MessageWithoutId,
  isLoading: boolean
}

export const initialState: MessagesFormState ={
  message:{author:'',message:'',image:null},
  isLoading: false
}

export const messagesFormSlice = createSlice({
  name:'messagesForm',
  initialState,
  reducers:{
    postMessage:(state,action:PayloadAction<{ key: string; value: string | FileList | null}>)=>{
      const { key, value } = action.payload;
      return {
        ...state,
          message: {
            ...state.message,
            [key]: value instanceof FileList ? value[0] : value,
          },
      };
    }
  },
  // extraReducers:(builder)=>{
  //
  // }
})

export const messagesFormReducer = messagesFormSlice.reducer;
export const {postMessage}=messagesFormSlice.actions

export const messagesFormState = (state: RootState) => state.messagesForm.message;