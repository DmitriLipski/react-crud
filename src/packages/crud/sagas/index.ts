import { all } from "redux-saga/effects";

import { getListSaga } from "./getListSaga";
import { getOneSaga } from "./getOneSaga";
import type { HttpClientType } from "../services";

export default function* rootSaga(apiClient: HttpClientType) {
  yield all([getListSaga(apiClient), getOneSaga(apiClient)]);
}
