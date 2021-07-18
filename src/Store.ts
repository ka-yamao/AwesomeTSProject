import {AppState, appReducer} from './AppAction';
import {combineReducers, createStore} from 'redux';

export interface RootState {
  app: AppState;
}

const reducers = combineReducers<RootState>({
  app: appReducer,
});

const store = createStore(reducers);

export default store;
