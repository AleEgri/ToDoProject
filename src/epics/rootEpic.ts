import { combineEpics } from 'redux-observable';
import { addTodoEpic } from './todoEpics';

export const rootEpic = combineEpics(
  addTodoEpic,
);
