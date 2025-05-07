import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { todoReducer } from '../reducers/todo.reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todoReducer'],
};

const rootReducer = combineReducers({
  todoReducer,
});

export default persistReducer(persistConfig, rootReducer );
