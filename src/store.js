import { configureStore, createSlice } from "@reduxjs/toolkit";

let dark = createSlice({
    name: "dark",
    initialState: "light",
    reducers : {
        toggleTheme : (state) => state === "light" ? "dark" : "light"
    }
})

export const {toggleTheme} = dark.actions;

export default configureStore({
    reducer : {
  
        dark : dark.reducer,
     
    }
})
