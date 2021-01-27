import { all } from "redux-saga/effects";

import { getListSaga } from "./getListSaga";
import { getOneSaga } from "./getOneSaga";

export default function* rootSaga() {
  yield all([getListSaga(), getOneSaga()]);
}
