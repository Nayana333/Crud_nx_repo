
import { todoConstants } from './constance/todo.contance';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

export interface AddTodoRequestAction {
  type: typeof todoConstants.ADD_TODO_REQUEST;
}

export interface AddTodoSuccessAction {
  type: typeof todoConstants.ADD_TODO_SUCCESS;
  todo: Todo;
}

export interface AddTodoFailureAction {
  type: typeof todoConstants.ADD_TODO_FAILURE;
  error: string;
}

export interface RemoveTodoRequestAction {
  type: typeof todoConstants.REMOVE_TODO_REQUEST;
}

export interface RemoveTodoSuccessAction {
  type: typeof todoConstants.REMOVE_TODO_SUCCESS;
  id: number;
}

export interface RemoveTodoFailureAction {
  type: typeof todoConstants.REMOVE_TODO_FAILURE;
  error: string;
}

export interface ToggleTodoRequestAction {
  type: typeof todoConstants.TOGGLE_TODO_REQUEST;
}

export interface ToggleTodoSuccessAction {
  type: typeof todoConstants.TOGGLE_TODO_SUCCESS;
  id: number;
}

export interface ToggleTodoFailureAction {
  type: typeof todoConstants.TOGGLE_TODO_FAILURE;
  error: string;
}

export interface EditTodoRequestAction {
  type: typeof todoConstants.EDIT_TODO_REQUEST;
  id: number;
  text: string;
}

export interface EditTodoSuccessAction {
  type: typeof todoConstants.EDIT_TODO_SUCCESS;
  id: number;
  text: string;
}

export interface EditTodoFailureAction {
  type: typeof todoConstants.EDIT_TODO_FAILURE;
  error: string;
}

export type TodoActionTypes =
  | AddTodoRequestAction
  | AddTodoSuccessAction
  | AddTodoFailureAction
  | RemoveTodoRequestAction
  | RemoveTodoSuccessAction
  | RemoveTodoFailureAction
  | ToggleTodoRequestAction
  | ToggleTodoSuccessAction
  | ToggleTodoFailureAction
  |EditTodoRequestAction
  | EditTodoSuccessAction
  | EditTodoFailureAction
