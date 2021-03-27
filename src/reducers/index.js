import { combineReducers } from 'redux'
import { statusReducer } from '@rootstrap/redux-tools';
import session from 'reducers/sessionReducer';
import authReducer from './authReducer';

export const reducers = combineReducers({
  session,
  authReducer,
  actionStatus: statusReducer,
});

export default reducers;
