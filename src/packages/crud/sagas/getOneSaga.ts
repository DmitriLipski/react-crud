import { takeLatest, call, put } from "redux-saga/effects";
import { GET_ONE } from "../constants";
import { getOneLoading, getOneSuccess, getOneFailure } from "../actions";
import { apiClient } from "../services";
import type { GetOneAction } from "../types/getOneTypes";

export function* getOneSaga(): Generator {
  yield takeLatest(GET_ONE, workerSaga);
}

export function* workerSaga(action: GetOneAction) {
  yield put(getOneLoading(action.meta.resource, action.payload.id));
  try {
    const data = yield call(
      { context: apiClient, fn: apiClient.getOne },
      `/${action.meta.resource}`,
      action.payload.id
    );
    yield put(getOneSuccess(action.meta.resource, data));
  } catch (error) {
    yield put(getOneFailure(action.meta.resource, error.toString()));
  }
}
