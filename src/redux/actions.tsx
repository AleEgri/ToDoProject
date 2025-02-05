import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  ADD_SUCCESS_SNACKBAR,
  REMOVE_SUCCESS_SNACKBAR,
  EDIT_TODO,
} from "./actionTypes";
import { createAction } from "typesafe-actions";

export const addSuccessSnackbar = createAction(ADD_SUCCESS_SNACKBAR);

export const addTodo = createAction(
  ADD_TODO,
  (action) => (assignedTo: string, tag: string, text: string) =>
    action({ assignedTo, tag, text })
);

export const editTodo = createAction(
  EDIT_TODO,
  (action) => (id: number, newText: string) => action({ id, newText })
);

export const toggleTodo = createAction(
  TOGGLE_TODO,
  (action) => (id: number) => action(id)
);

export const removeTodo = createAction(
  REMOVE_TODO,
  (action) => (id: number) => action(id)
);

export const removeSuccessSnackbar = createAction(REMOVE_SUCCESS_SNACKBAR);
