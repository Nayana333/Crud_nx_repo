import { createStore } from 'redux';
import rootReducer from './rootReducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Store } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todoReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store:Store = createStore(persistedReducer);
export const persistor = persistStore(store);
