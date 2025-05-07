import { todoConstants } from '../constance/todo.contance';

import {
    TodoState,
    TodoActionTypes,
    AddTodoSuccessAction,
    RemoveTodoSuccessAction,
    ToggleTodoSuccessAction,
    ToggleTodoFailureAction,
    RemoveTodoFailureAction,
    AddTodoFailureAction
} from '../todo.types';

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
};

function isAddTodoSuccessAction(action: TodoActionTypes): action is AddTodoSuccessAction {
    return action.type === todoConstants.ADD_TODO_SUCCESS;
}

function isRemoveTodoSuccessAction(action: TodoActionTypes): action is RemoveTodoSuccessAction {
    return action.type === todoConstants.REMOVE_TODO_SUCCESS;
}

function isToggleTodoSuccessAction(action: TodoActionTypes): action is ToggleTodoSuccessAction {
    return action.type === todoConstants.TOGGLE_TODO_SUCCESS;
}

export function todoReducer(state = initialState, action: TodoActionTypes): TodoState {
    switch (action.type) {
        case todoConstants.ADD_TODO_REQUEST:
            return { ...state, loading: true };

        case todoConstants.ADD_TODO_SUCCESS:
            if (isAddTodoSuccessAction(action)) {
                return { ...state, loading: false, todos: [...state.todos, action.todo] };
            }
            return state;

        case todoConstants.ADD_TODO_FAILURE:
            return { ...state, loading: false, error: (action as AddTodoFailureAction).error };

        case todoConstants.REMOVE_TODO_REQUEST:
            return { ...state, loading: true };

        case todoConstants.REMOVE_TODO_SUCCESS:
            if (isRemoveTodoSuccessAction(action)) {
                return { ...state, loading: false, todos: state.todos.filter(todo => todo.id !== action.id) };
            }
            return state;

        case todoConstants.REMOVE_TODO_FAILURE:
            return { ...state, loading: false, error: (action as RemoveTodoFailureAction).error };

        case todoConstants.TOGGLE_TODO_REQUEST:
            return { ...state, loading: true };

        case todoConstants.TOGGLE_TODO_SUCCESS:
            if (isToggleTodoSuccessAction(action)) {
                return {
                    ...state,
                    loading: false,
                    todos: state.todos.map(todo =>
                        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                    ),
                };
            }
            return state;

        case todoConstants.TOGGLE_TODO_FAILURE:
            return { ...state, loading: false, error: (action as ToggleTodoFailureAction).error };

        default:
            return state;
    }
}

export default todoReducer;
