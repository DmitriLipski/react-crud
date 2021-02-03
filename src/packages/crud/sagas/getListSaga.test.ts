import { expect } from "chai";
import { takeLatest } from "redux-saga/effects";
import { getListSaga, workerSaga } from "./getListSaga";
import { GET_LIST } from "../constants";
import { apiClient } from "../services/ApiClient";

describe("getListSaga", () => {
  const genObject = getListSaga(apiClient);

  it("should wait for every GET_LIST action and call workerSaga", () => {
    expect(genObject.next().value).to.deep.equal(
      takeLatest(GET_LIST, workerSaga, apiClient)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).to.equal(true);
  });
});
