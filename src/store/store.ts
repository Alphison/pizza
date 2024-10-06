import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user.slice";

export const store = configureStore({
    reducer: {
        
    }
})

export type RootState = ReturnType<typeof store.getState> 
export type typeAppDispatch = typeof store.dispatch 