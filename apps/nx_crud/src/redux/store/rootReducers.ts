import { combineReducers } from 'redux';
import { todoReducer } from '../reducers/todo.reducers';

const rootReducer = combineReducers({
  todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
