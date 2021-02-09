import { expect } from "chai";
import sinon, { SinonSpy } from "sinon";
import { renderHook, act } from "@testing-library/react-hooks/dom";
import { useListController } from "./useListController";
import { apiClient } from "../services";

const sandbox = sinon.createSandbox();

describe("should increment counter", () => {
  it("correct result", () => {
    beforeEach(function () {
      // stub out the `fetchData` method
      sandbox.stub(apiClient, "getAll");
    });

    afterEach(function () {
      // completely restore all fakes created through the sandbox
      sandbox.restore();
    });
    // TODO: Implement full test
    // const { result } = renderHook(({ resource }) => useListController(resource),
    //   {
    //     initialProps: {
    //       resource: 'users',
    //     },
    //   },
    // );

    expect(true).to.deep.equal(true);
  });
});
