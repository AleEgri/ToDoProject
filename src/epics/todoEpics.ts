import { Epic} from 'redux-observable';
import { filter, map } from 'rxjs/operators';
import { addSuccessSnackbar, toggleTodo } from '../redux/actions';
import { isActionOf } from 'typesafe-actions';

export const addSuccessSnackbarEpic: Epic<any> = (action$) =>
  action$.pipe(
    filter(isActionOf(toggleTodo)),
    map(() => addSuccessSnackbar())
  );
