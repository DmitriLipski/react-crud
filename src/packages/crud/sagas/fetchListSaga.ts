import { takeLatest, call, put } from "redux-saga/effects";
import { GET_LIST } from "../constants";
import type { ResourceActionTypes } from "../types";
import { getListFailure, getListSuccess } from "../actions";
import { apiClient } from "../services";

export function* fetchListSaga(): Generator {
  yield takeLatest(GET_LIST, workerSaga);
}

export function* workerSaga(action: ResourceActionTypes) {
  try {
    const data = yield call(
      { context: apiClient, fn: apiClient.getAll },
      `/${action.meta.resource}`
    );
    yield put(getListSuccess(action.meta.resource, data));
  } catch (error) {
    yield put(getListFailure(action.meta.resource, error.toString()));
  }
}
