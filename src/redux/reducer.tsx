import { ActionType, getType } from 'typesafe-actions';
import * as todoActions from './actions';

type Actions = ActionType<typeof todoActions>;

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodosState {
  todos: Todo[];
}
export interface ISnackbarState {
  open: boolean,
};

const initialState: ITodosState = {
  todos: [],
};

export const todosReducer = (state: ITodosState = initialState, action: Actions): ITodosState => {
  switch (action.type) {
    case getType(todoActions.addTodo):
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };

    case getType(todoActions.toggleTodo):
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case getType(todoActions.removeTodo):
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

const initialSnackbarState: ISnackbarState = {
  open: false,
};


export const snackbarReducer = (state: ISnackbarState = initialSnackbarState, action: Actions): ISnackbarState => {
  switch (action.type) {
    case getType(todoActions.addSuccessSnackbar):
      return { ...state, open: true };
    case getType(todoActions.removeSuccessSnackbar):
      return { ...state, open: false };
    default:
      return state;
  }
};