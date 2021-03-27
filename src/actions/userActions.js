import { createThunk, createAction } from '@rootstrap/redux-tools';
import userService from 'services/userService';
import parseError from 'utils/parseError';
import * as authConst from 'constants/auth';

export const login = (params) => ({
  type: authConst.LOGIN,
  payload: {
    params
  }
});

export const loginSuccess = (params) => ({
  type: authConst.LOGIN_SUCCESS,
  payload: {
    params
  }
});

export const loginError = (params) => ({
  type: authConst.LOGIN_ERROR,
  payload: {
    params
  }
});

export const logout = createThunk('LOGOUT', async () => {
  try {
    await userService.logout();
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const signUp = createThunk('SIGNUP', async user => {
  try {
    const { data } = await userService.signUp({ user });
    return data;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const updateSession = createAction('UPDATE_SESSION');

// export const { success: loginSuccess } = login;
export const { success: signUpSuccess } = signUp;
export const { success: logoutSuccess } = logout;
