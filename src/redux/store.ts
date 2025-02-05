import { createStore, applyMiddleware, combineReducers, Reducer } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ISnackbarState, ITodosState, snackbarReducer, todosReducer } from './reducer';
import { rootEpic } from '../epics/rootEpic';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

type ComponentState = {
  todos: ITodosState;
  snackbar: ISnackbarState;
}

const persistConfig = {
  key: 'root',  
  storage,      
};

const rootReducer = combineReducers({
  todos: todosReducer,
  snackbar: snackbarReducer,
});

//TODO: Fix the type of persistedReducer
const persistedReducer = persistReducer<Partial<ComponentState>>(persistConfig, rootReducer as Reducer<Partial<ComponentState>>);

export type RootState = ReturnType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);
