import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH, PAUSE,
  PERSIST, persistReducer, persistStore, PURGE,
  REGISTER, REHYDRATE
} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import userReducer from './userSlice'
import videoReducer from "./videoSlice"

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({user: userReducer, video: videoReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // It's not important to understand, just copy shshsh
    },
  }),
})

export const persistor = persistStore(store)
