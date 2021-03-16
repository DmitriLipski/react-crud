import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { expect } from "chai";
import sinon, { SinonSpy } from "sinon";
import { renderHook, act } from "@testing-library/react-hooks/dom";
import { useListController } from "./useListController";
import { apiClient } from "../services";
import { getRootReducer } from "../reducers";

const sandbox = sinon.createSandbox();

describe("should increment counter", () => {
  beforeEach(function () {
    // stub out the `fetchData` method
    sandbox.stub(apiClient, "getAll");
  });

  afterEach(function () {
    // completely restore all fakes created through the sandbox
    sandbox.restore();
  });

  it("correct result", async () => {
    // TODO: Implement full test
    const { result, waitForNextUpdate } = renderHook(
      ({ resource }) => useListController(resource),
      {
        initialProps: {
          resource: "users",
        },
        wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
      }
    );

    expect(result.current.data).to.deep.equal({});

    // await waitForNextUpdate();
    // sandbox.assert.calledOnce(apiClient.getAll as SinonSpy<any, any>)
  });
});

const Wrapper = ({ children }: { children: ReactNode }) => {
  const store = createStore(getRootReducer(["users"]));

  return <Provider store={store}>{children}</Provider>;
};
