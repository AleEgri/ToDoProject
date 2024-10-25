import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, ADD_SUCCESS_SNACKBAR, REMOVE_SUCCESS_SNACKBAR } from './actionTypes';
import { createAction } from 'typesafe-actions';

export const addSuccessSnackbar = createAction(ADD_SUCCESS_SNACKBAR)

export const addTodo = createAction(ADD_TODO, action => 
  (text: string) => action(text)
);

export const toggleTodo = createAction(TOGGLE_TODO, action =>
  (id: number) => action(id)
);

export const removeTodo = createAction(REMOVE_TODO, action =>
  (id: number) => action(id)
);

export const removeSuccessSnackbar = createAction(REMOVE_SUCCESS_SNACKBAR)
