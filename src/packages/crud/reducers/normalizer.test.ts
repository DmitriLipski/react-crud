import { expect } from "chai";
import { resourceDataNormalizer } from "./normalizer";

describe("resourceDataNormalizer", () => {
  it("returns correct result #1", () => {
    const currentState = {};
    const response = [
      { id: 1, name: "Bob" },
      { id: 2, name: "John" },
    ];

    expect(resourceDataNormalizer(currentState, response)).to.deep.equal({
      data: { 1: { id: 1, name: "Bob" }, 2: { id: 2, name: "John" } },
      ids: [1, 2],
    });
  });

  it("returns correct result #2", () => {
    const currentState = { 1: { id: 1, name: "Bob" } };
    const response = [
      { id: 2, name: "John" },
      { id: 3, name: "Sam" },
    ];

    expect(resourceDataNormalizer(currentState, response)).to.deep.equal({
      data: {
        1: { id: 1, name: "Bob" },
        2: { id: 2, name: "John" },
        3: { id: 3, name: "Sam" },
      },
      ids: [1, 2, 3],
    });
  });

  it("returns correct result #3", () => {
    const currentState = { 1: { id: 1, name: "Bob" } };
    const response = [
      { id: 1, name: "Bob" },
      { id: 2, name: "John" },
    ];

    expect(resourceDataNormalizer(currentState, response)).to.deep.equal({
      data: { 1: { id: 1, name: "Bob" }, 2: { id: 2, name: "John" } },
      ids: [1, 2],
    });
  });
});
