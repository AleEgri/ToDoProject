import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { todosReducer } from './reducer';
import { rootEpic } from '../epics/rootEpic';

// Combine reducers if you have multiple
const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware();

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

// Run your root epic
epicMiddleware.run(rootEpic);
