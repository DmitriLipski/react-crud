import { all } from "redux-saga/effects";

import { fetchListSaga } from "./fetchListSaga";

export default function* rootSaga() {
  yield all([fetchListSaga()]);
}
