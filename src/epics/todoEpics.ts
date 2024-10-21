import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { ADD_TODO } from '../redux/actionTypes';

export const addTodoEpic = (action$: any) =>
  action$.pipe(
    ofType(ADD_TODO),
    map(action => {  
      return { type: 'TODO_ADDED_LOGGED' }; 
    })
  );
