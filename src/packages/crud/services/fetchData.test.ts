import { expect } from "chai";
import axios from "axios";
import sinon, { SinonSpy } from "sinon";
import { apiClient } from "./fetchData";

const sandbox = sinon.createSandbox();

describe("myAPI.hello method", function () {
  beforeEach(function () {
    // stub out the `fetchData` method
    sandbox.stub(axios, "get");
  });

  afterEach(function () {
    // completely restore all fakes created through the sandbox
    sandbox.restore();
  });

  it("should be called once", function () {
    apiClient.fetchData("users");
    sandbox.assert.calledOnce(axios.get as SinonSpy<any, any>);
  });

  // it('should be called twice', function () {
  //   apiClient.fetchData('users');
  //   apiClient.fetchData('users');
  //   sandbox.assert.calledTwice(apiClient.fetchData as SinonSpy<any, any>);
  // });
});
