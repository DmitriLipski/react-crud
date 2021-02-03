import React from "react";
import { Provider } from "react-redux";
import { getStore } from "./store";
import type { CustomReducersType } from "./types";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { MockApiClient, ApiClient, HttpClientType } from "./services";

interface ReactCRUDProps {
  children: JSX.Element | Array<JSX.Element> | string;
  resources: Array<string>;
  customReducers?: CustomReducersType;
  customApiClient?: HttpClientType;
  resourceMap: Record<string, string>;
}

function ReactCRUD({
  children,
  resources,
  customReducers = {},
  customApiClient,
  resourceMap,
}: ReactCRUDProps): JSX.Element {
  const sagaMiddleware = createSagaMiddleware();
  const composedEnhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger)
  );

  const store = getStore(resources, customReducers, composedEnhancer);

  const apiClient =
    import.meta.env.SNOWPACK_PUBLIC_DATA_PROVIDER === "local"
      ? new MockApiClient()
      : customApiClient ||
        new ApiClient(import.meta.env.SNOWPACK_PUBLIC_API_URL, resourceMap);

  sagaMiddleware.run(rootSaga, apiClient as HttpClientType);

  if (import.meta.env.MODE === "development" && import.meta.hot) {
    import.meta.hot.accept(
      ["./reducers/index.js"],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ({ deps }: { deps: any[] }) => {
        const newRootReducer = deps[0].getRootReducer(resources);
        store.replaceReducer(newRootReducer);
      }
    );
  }

  return <Provider store={store}>{children}</Provider>;
}

export default ReactCRUD;
