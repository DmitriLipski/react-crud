import { takeLatest, call, put } from "redux-saga/effects";
import { GET_LIST } from "../constants";
import { getListFailure, getListLoading, getListSuccess } from "../actions";
import type { HttpClientType } from "../services";
import type { GetListAction } from "../types/getListTypes";

export function* getListSaga(apiClient: HttpClientType): Generator {
  yield takeLatest(GET_LIST, workerSaga, apiClient);
}

export function* workerSaga(apiClient: HttpClientType, action: GetListAction) {
  yield put(getListLoading(action.meta.resource));
  try {
    const data = yield call(
      { context: apiClient, fn: apiClient.getAll },
      action.meta.resource,
      action.payload
    );
    yield put(getListSuccess(action.meta.resource, data));
  } catch (error) {
    yield put(getListFailure(action.meta.resource, error.toString()));
  }
}
