import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import darkModeReducer from './reducers/darkModeReducer'




export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
})


