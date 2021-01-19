import { expect } from "chai";
import { getList, getListFailure, getListSuccess } from "./getList";
import { GET_LIST, GET_LIST_FAILURE, GET_LIST_SUCCESS } from "../constants";

describe("getList actions", () => {
  it("returns correct action object", () => {
    expect(getList("users")).to.deep.equal({
      type: GET_LIST,
      meta: { resource: "users" },
    });
  });

  it("returns correct success action", () => {
    const data = [
      { id: 1, name: "Bob" },
      { id: 2, name: "Kurt" },
    ];
    expect(getListSuccess("users", data)).to.deep.equal({
      type: GET_LIST_SUCCESS,
      payload: { data },
      meta: { resource: "users" },
    });
  });

  it("returns correct error action", () => {
    expect(getListFailure("users", "Some error")).to.deep.equal({
      type: GET_LIST_FAILURE,
      payload: { error: "Some error" },
      meta: { resource: "users" },
    });
  });
});
