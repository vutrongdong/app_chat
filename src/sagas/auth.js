import { call, put, takeLatest } from 'redux-saga/effects';
import * as authApi from 'apis/auth.js';
import * as authConst from 'constants/auth';
import * as actions from 'actions/userActions.js';

function* watchProcessLogin({ payload }) {
    try {
      const response = yield call(authApi.login, payload.params);
      yield put(actions.loginSuccess(response));
    } catch (error) {
      yield put(actions.loginError(error));
    }
}

function* authSaga() {
    yield takeLatest(authConst.LOGIN, watchProcessLogin);
}

export default authSaga;