import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/authReducer";
import { api } from "./api";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    reducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export const persistor = persistStore(store);
