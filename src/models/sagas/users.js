import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../requests";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUsersSuccess(result.data.response));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
