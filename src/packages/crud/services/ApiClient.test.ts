import { expect } from "chai";
import axios from "axios";
import sinon, { SinonSpy } from "sinon";
import { apiClient } from "./index";

const sandbox = sinon.createSandbox();

describe("ApiClient.getAll method", function () {
  beforeEach(function () {
    // stub out the `fetchData` method
    sandbox.stub(apiClient.instance, "get");
  });

  afterEach(function () {
    // completely restore all fakes created through the sandbox
    sandbox.restore();
  });

  it("should be called once", function () {
    apiClient.getAll("users");
    sandbox.assert.calledOnce(apiClient.instance.get as SinonSpy<any, any>);
  });

  it("should return correct params object", function () {
    expect(apiClient._getParams({ filter: {} })).to.deep.equal({ params: {} });
  });

  it("should return correct params object", function () {
    expect(
      apiClient._getParams({ pagination: { page: 1, size: 10 }, filter: {} })
    ).to.deep.equal({ params: { page: 1, size: 10 } });
  });

  it("should return correct params object", function () {
    expect(
      apiClient._getParams({
        pagination: { page: 1, size: 10 },
        filter: { userId: 1 },
      })
    ).to.deep.equal({ params: { page: 1, size: 10, userId: 1 } });
  });

  it("should return correct params object", function () {
    expect(
      apiClient._getParams({
        pagination: { page: 1, size: 10 },
        filter: { userId: 1 },
        sort: { field: "id", order: "ASC" },
      })
    ).to.deep.equal({
      params: { page: 1, size: 10, userId: 1, field: "id", order: "ASC" },
    });
  });
});
