import { expect } from "chai";
import {
  getListResourceDataNormalizer,
  getOneResourceDataNormalizer,
} from "./normalizer";
import type { Identifier } from "../types";

describe("getOneResourceDataNormalizer", () => {
  it("returns correct result #1", () => {
    const currentResourceData = {};
    const currentResourceIds: Array<Identifier> = [];
    const response = { id: 1, name: "Bob" };

    expect(
      getOneResourceDataNormalizer(
        currentResourceData,
        currentResourceIds,
        response
      )
    ).to.deep.equal({
      data: { 1: { id: 1, name: "Bob" } },
      ids: [1],
    });
  });

  it("returns correct result #2", () => {
    const currentResourceData = { 1: { id: 1, name: "Bob" } };
    const currentResourceIds: Array<Identifier> = [1];
    const response = { id: 2, name: "John" };

    expect(
      getOneResourceDataNormalizer(
        currentResourceData,
        currentResourceIds,
        response
      )
    ).to.deep.equal({
      data: { 1: { id: 1, name: "Bob" }, 2: { id: 2, name: "John" } },
      ids: [1, 2],
    });
  });

  it("returns correct result #3", () => {
    const currentResourceData = {
      1: { id: 1, name: "Bob" },
      2: { id: 2, name: "John" },
    };
    const currentResourceIds: Array<Identifier> = [1, 2];
    const response = { id: 3, name: "Sam" };

    expect(
      getOneResourceDataNormalizer(
        currentResourceData,
        currentResourceIds,
        response
      )
    ).to.deep.equal({
      data: {
        1: { id: 1, name: "Bob" },
        2: { id: 2, name: "John" },
        3: { id: 3, name: "Sam" },
      },
      ids: [1, 2, 3],
    });
  });

  it("returns correct result #4", () => {
    const currentResourceData = {
      1: { id: 1, name: "Bob" },
      2: { id: 2, name: "John" },
    };
    const currentResourceIds: Array<Identifier> = [1, 2];
    const response = { id: 2, name: "John2" };

    expect(
      getOneResourceDataNormalizer(
        currentResourceData,
        currentResourceIds,
        response
      )
    ).to.deep.equal({
      data: { 1: { id: 1, name: "Bob" }, 2: { id: 2, name: "John2" } },
      ids: [1, 2],
    });
  });
});

describe("getListResourceDataNormalizer", () => {
  it("returns correct result #1", () => {
    const currentState = {};
    const response = [
      { id: 1, name: "Bob" },
      { id: 2, name: "John" },
    ];

    expect(getListResourceDataNormalizer(currentState, response)).to.deep.equal(
      {
        data: { 1: { id: 1, name: "Bob" }, 2: { id: 2, name: "John" } },
        ids: [1, 2],
      }
    );
  });

  it("returns correct result #2", () => {
    const currentState = { 1: { id: 1, name: "Bob" } };
    const response = [
      { id: 2, name: "John" },
      { id: 3, name: "Sam" },
    ];

    expect(getListResourceDataNormalizer(currentState, response)).to.deep.equal(
      {
        data: {
          1: { id: 1, name: "Bob" },
          2: { id: 2, name: "John" },
          3: { id: 3, name: "Sam" },
        },
        ids: [2, 3],
      }
    );
  });

  it("returns correct result #3", () => {
    const currentState = { 1: { id: 1, name: "Bob" } };
    const response = [
      { id: 1, name: "Bob" },
      { id: 2, name: "John" },
    ];

    expect(getListResourceDataNormalizer(currentState, response)).to.deep.equal(
      {
        data: { 1: { id: 1, name: "Bob" }, 2: { id: 2, name: "John" } },
        ids: [1, 2],
      }
    );
  });

  it("returns correct result #4", () => {
    const currentState = {
      1: { id: 1, name: "Bob" },
      2: { id: 2, name: "John" },
      3: { id: 3, name: "Sam" },
    };

    const response = [
      { id: 1, name: "Bob" },
      { id: 2, name: "John" },
    ];

    expect(getListResourceDataNormalizer(currentState, response)).to.deep.equal(
      {
        data: {
          1: { id: 1, name: "Bob" },
          2: { id: 2, name: "John" },
          3: { id: 3, name: "Sam" },
        },
        ids: [1, 2],
      }
    );
  });
});
