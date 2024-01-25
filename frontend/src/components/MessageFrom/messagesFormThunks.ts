import {createAsyncThunk} from "@reduxjs/toolkit";
import {MessageWithoutId} from "../../types";
import {axiosApi} from "../../axiosApi.ts";

export const uploadMessage = createAsyncThunk<void, MessageWithoutId>(
    'messagesFrom/post', async (arg)=>{
      try{
        console.log(arg)
        const formData=  new FormData();
        formData.append('author', arg.author)
        formData.append('message', arg.message)
        console.log(arg.image)
        if(arg.image) {
          formData.append('image', arg.image)
        }

        await axiosApi.post('/messages', formData)
      }catch (e){
        console.log('Caught on try - POST MESSAGE - ', e)
      }
    }
)