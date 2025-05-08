


import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todoReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ReturnType<typeof rootReducer>, any> = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
