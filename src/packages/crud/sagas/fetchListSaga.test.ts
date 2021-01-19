import { expect } from "chai";
import { takeLatest } from "redux-saga/effects";
import { fetchListSaga, workerSaga } from "./fetchListSaga";
import { GET_LIST } from "../constants";

describe("fetchListSaga", () => {
  const genObject = fetchListSaga();

  it("should wait for every GET_LIST action and call workerSaga", () => {
    expect(genObject.next().value).to.deep.equal(
      takeLatest(GET_LIST, workerSaga)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).to.equal(true);
  });
});
