import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import filterReducer from "./filters/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
  filters: filterReducer,
});

export default rootReducer;
