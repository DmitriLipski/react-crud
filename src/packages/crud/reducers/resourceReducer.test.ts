import { expect } from "chai";
import { getListFailure, getListLoading, getListSuccess } from "../actions";
import { getResourceReducer, initialState } from "./resourceReducer";
import type { ResourceState } from "../types";
import { getOneFailure, getOneLoading, getOneSuccess } from "../actions/getOne";

describe("resource reducer", () => {
  const userReducer = getResourceReducer("users");

  //GET_LIST
  it("return correct init state", () => {
    expect(userReducer(initialState, getListLoading("tasks"))).to.deep.equal(
      initialState
    );
  });

  it("return correct state on loading list", () => {
    const state: ResourceState = {
      data: {},
      ids: [],
      loading: true,
      loaded: false,
      error: null,
    };
    expect(userReducer(initialState, getListLoading("users"))).to.deep.equal(
      state
    );
  });

  it("return correct state on get list success", () => {
    const response = [
      { id: 1, name: "Bob" },
      { id: 2, name: "John" },
    ];

    const state: ResourceState = {
      data: { 1: { id: 1, name: "Bob" }, 2: { id: 2, name: "John" } },
      ids: [1, 2],
      loading: false,
      loaded: true,
      error: null,
    };

    expect(
      userReducer(initialState, getListSuccess("users", response))
    ).to.deep.equal(state);
  });

  it("return correct state on get list failure", () => {
    const error = "some error";
    const state: ResourceState = {
      data: {},
      ids: [],
      loading: false,
      loaded: false,
      error: "some error",
    };

    expect(
      userReducer(initialState, getListFailure("users", error))
    ).to.deep.equal(state);
  });

  //GET_ONE
  it("return correct state on loading one", () => {
    const state: ResourceState = {
      data: {},
      ids: [],
      loading: true,
      loaded: false,
      error: null,
    };
    expect(userReducer(initialState, getOneLoading("users", 1))).to.deep.equal(
      state
    );
  });

  it("return correct state on get one success", () => {
    const response = { id: 1, name: "Bob" };

    const state: ResourceState = {
      data: { 1: { id: 1, name: "Bob" } },
      ids: [1],
      loading: false,
      loaded: true,
      error: null,
    };

    expect(
      userReducer(initialState, getOneSuccess("users", response))
    ).to.deep.equal(state);
  });

  it("return correct state on get one failure", () => {
    const error = "some error";
    const state: ResourceState = {
      data: {},
      ids: [],
      loading: false,
      loaded: false,
      error: "some error",
    };

    expect(
      userReducer(initialState, getOneFailure("users", error))
    ).to.deep.equal(state);
  });
});
