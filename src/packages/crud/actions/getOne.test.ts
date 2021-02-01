import { expect } from "chai";
import { getOne, getOneLoading, getOneSuccess, getOneFailure } from "./getOne";
import {
  GET_ONE,
  GET_ONE_LOADING,
  GET_ONE_SUCCESS,
  GET_ONE_FAILURE,
} from "../constants";

describe("getOne actions", () => {
  it("returns correct action object", () => {
    expect(getOne("users", 1)).to.deep.equal({
      type: GET_ONE,
      payload: { id: 1 },
      meta: { resource: "users" },
    });
  });

  it("returns correct loading action", () => {
    expect(getOneLoading("users", 1)).to.deep.equal({
      type: GET_ONE_LOADING,
      payload: { id: 1 },
      meta: { resource: "users" },
    });
  });

  it("returns correct success action", () => {
    expect(getOneSuccess("users", { id: 1, name: "Bob" })).to.deep.equal({
      type: GET_ONE_SUCCESS,
      payload: { data: { id: 1, name: "Bob" } },
      meta: { resource: "users" },
    });
  });

  it("returns correct failure action", () => {
    expect(getOneFailure("users", "some error")).to.deep.equal({
      type: GET_ONE_FAILURE,
      payload: { error: "some error" },
      meta: { resource: "users" },
    });
  });
});
