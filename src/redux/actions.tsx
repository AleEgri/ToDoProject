import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

export interface AddTodoAction {
  type: 'ADD_TODO';
  payload: string;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: id,
});

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | RemoveTodoAction;
