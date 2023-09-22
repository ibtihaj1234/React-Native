import { configureStore } from "@reduxjs/toolkit";
import LangSlice from "../slices/LangSlice";

export const store = configureStore({
    reducer: {
        Lang: LangSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});