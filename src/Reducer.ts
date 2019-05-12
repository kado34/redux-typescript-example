import counterReducer, { CounterState } from './reducers/CounterReducer';
import { combineReducers } from 'redux';

export interface AppState {
  counter: CounterState;
}

const appReducer = combineReducers<AppState>({
  counter: counterReducer,
});

export default appReducer;
