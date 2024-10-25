import { combineEpics } from 'redux-observable';
import { addSuccessSnackbarEpic } from './todoEpics';

export const rootEpic = combineEpics(
  addSuccessSnackbarEpic,
);
