import { expect } from "chai";
import { getResource } from "./index";

describe("getResource", () => {
  const testState = {
    resources: {
      users: {
        data: {},
        ids: [],
        loading: false,
        loaded: false,
        error: null,
      },
    },
  };
  it("returns correct resource data", () => {
    const result = {
      data: {},
      ids: [],
      loading: false,
      loaded: false,
      error: null,
    };
    expect(getResource(testState, "users")).to.deep.equal(result);
  });
});
