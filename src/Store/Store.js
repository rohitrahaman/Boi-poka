import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./book/bookSlice";
import preferanceReducer from "./Preferance/preferanceSlice";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  book: bookReducer,
  preferance: preferanceReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
