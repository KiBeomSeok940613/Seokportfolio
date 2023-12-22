import { configureStore, createSlice } from "@reduxjs/toolkit";

let saveDark = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

let dark = createSlice({
    name: "dark",
    initialState: saveDark,
    reducers : {
        toggleTheme : (state) =>{
            let newTheme =
             state === "light" ? "dark" : "light";
            localStorage.setItem('theme' , newTheme);
            return newTheme;
        
        }
    }
})

export const {toggleTheme} = dark.actions;

export default configureStore({
    reducer : {
  
        dark : dark.reducer,
     
    }
})
