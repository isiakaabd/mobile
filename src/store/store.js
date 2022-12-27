import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/authReducer";
import { api } from "./api";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
  whitelist: ["bearerToken", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    reducer: persistedReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});
export const persistor = persistStore(store);
