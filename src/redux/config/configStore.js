import { configureStore } from "@reduxjs/toolkit";
import listReducer from '../modules/listSlice';
const store = configureStore({
    reducer: {
        lists: listReducer
    },
});

export default store;