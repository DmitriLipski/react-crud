import { takeLatest, call, put } from "redux-saga/effects";
import { GET_ONE } from "../constants";
import { getOneLoading, getOneSuccess, getOneFailure } from "../actions";
import type { GetOneAction } from "../types/getOneTypes";
import type { HttpClientType } from "../services";

export function* getOneSaga(apiClient: HttpClientType): Generator {
  yield takeLatest(GET_ONE, workerSaga, apiClient);
}

export function* workerSaga(apiClient: HttpClientType, action: GetOneAction) {
  yield put(getOneLoading(action.meta.resource, action.payload.id));
  try {
    const data = yield call(
      { context: apiClient, fn: apiClient.getOne },
      action.meta.resource,
      action.payload.id
    );
    yield put(getOneSuccess(action.meta.resource, data));
  } catch (error) {
    yield put(getOneFailure(action.meta.resource, error.toString()));
  }
}
