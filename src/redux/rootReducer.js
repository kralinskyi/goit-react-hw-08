import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsReducer } from "./contacts/slice";
import filterReducer from "./filters/slice";
import { authReducer } from "./auth/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "items"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filters: filterReducer,
  auth: persistedAuthReducer,
});

export default rootReducer;
