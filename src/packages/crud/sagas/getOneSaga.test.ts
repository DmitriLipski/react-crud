import { expect } from "chai";
import { takeLatest } from "redux-saga/effects";
import { getOneSaga, workerSaga } from "./getOneSaga";
import { GET_ONE } from "../constants";

describe("getListSaga", () => {
  const genObject = getOneSaga();

  it("should wait for every GET_ONE action and call workerSaga", () => {
    expect(genObject.next().value).to.deep.equal(
      takeLatest(GET_ONE, workerSaga)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).to.equal(true);
  });
});
