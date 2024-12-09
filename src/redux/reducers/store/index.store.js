import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../index";

 const store = configureStore({
    reducer: mainReducer
})
export default store