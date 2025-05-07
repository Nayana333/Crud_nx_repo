  import { Dispatch } from 'redux';
  import { todoConstants } from '../constance/todo.contance';
  import { TodoActionTypes } from '../todo.types';

  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

  export const todoActions = {
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo
  };

  // Define the action creator for addTodo
  function addTodo(newTodo: Todo) {
    return (dispatch: Dispatch<TodoActionTypes>) => {
      dispatch(request(newTodo));
      try {
        dispatch(success(newTodo));
      } catch (error) {
        dispatch(failure(error as string));
      }

      function request(todo: Todo) {
        return { type: todoConstants.ADD_TODO_REQUEST, todo };
      }

      function success(todo: Todo) {
        return { type: todoConstants.ADD_TODO_SUCCESS, todo };
      }

      function failure(error: string) {
        return { type: todoConstants.ADD_TODO_FAILURE, error };
      }
    };
  }

  function removeTodo(id: number) {
    return (dispatch: Dispatch<TodoActionTypes>) => {
      dispatch(request(id));
      try {
        dispatch(success(id));
      } catch (error) {
        dispatch(failure(error as string));
      }

      function request(id: number) {
        return { type: todoConstants.REMOVE_TODO_REQUEST, id };
      }

      function success(id: number) {
        return { type: todoConstants.REMOVE_TODO_SUCCESS, id };
      }

      function failure(error: string) {
        return { type: todoConstants.REMOVE_TODO_FAILURE, error };
      }
    };
  }

  function toggleTodo(id: number) {
    return (dispatch: Dispatch<TodoActionTypes>) => {
      dispatch(request(id));
      try {
        dispatch(success(id));
      } catch (error) {
        dispatch(failure(error as string));
      }

      function request(id: number) {
        return { type: todoConstants.TOGGLE_TODO_REQUEST, id };
      }

      function success(id: number) {
        return { type: todoConstants.TOGGLE_TODO_SUCCESS, id };
      }

      function failure(error: string) {
        return { type: todoConstants.TOGGLE_TODO_FAILURE, error };
      }
    };
    
  }


  function editTodo(id: number, newText: string) {
    return (dispatch: Dispatch<TodoActionTypes>) => {
      dispatch(request(id, newText));
      try {
        dispatch(success(id, newText));
      } catch (error) {
        dispatch(failure(error as string));
      }

      function request(id: number, text: string) {
        return { type: todoConstants.EDIT_TODO_REQUEST, id, text };
      }

      function success(id: number, text: string) {
        return { type: todoConstants.EDIT_TODO_SUCCESS, id, text };
      }

      function failure(error: string) {
        return { type: todoConstants.EDIT_TODO_FAILURE, error };
      }
    };
  }
