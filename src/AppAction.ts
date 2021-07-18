import {Reducer} from 'redux';

// State
export interface AppState {
  verName: string;
  verCode: number;
}

// Action
type AppStateAction = {
  type: 'UPDATE_VERSION';
  payload: AppState;
};

// State の初期値
const initState: AppState = {
  verName: '1.0.0',
  verCode: 1,
};

/**
 * Reducer
 * @param state ステート
 * @param action アクション
 */
export const appReducer: Reducer<AppState, AppStateAction> = (
  state: AppState = initState,
  action: AppStateAction,
): AppState => {
  switch (action.type) {
    case 'UPDATE_VERSION': // バージョンを更新
      return {...state, ...action.payload};
    default:
      return state;
  }
};
