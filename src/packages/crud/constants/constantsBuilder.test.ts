import { expect } from "chai";
import { createActionTypes } from "./constantsBuilder";

describe("createActionTypes", () => {
  it("returns correct action types for async actions", () => {
    expect(createActionTypes("GET_LIST")).to.deep.equal({
      init: "GET_LIST",
      loading: "GET_LIST_LOADING",
      success: "GET_LIST_SUCCESS",
      failure: "GET_LIST_FAILURE",
    });
  });
});
