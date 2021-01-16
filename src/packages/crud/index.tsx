import React from "react";
import { Provider } from "react-redux";
import { getStore } from "./store";
import type { CustomReducersType } from "./types";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

interface ReactCRUDProps {
  children: JSX.Element | Array<JSX.Element> | string;
  resources: Array<string>;
  customReducers?: CustomReducersType;
}

function ReactCRUD({
  children,
  resources,
  customReducers = {},
}: ReactCRUDProps): JSX.Element {
  const sagaMiddleware = createSagaMiddleware();
  const composedEnhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger)
  );
  const store = getStore(resources, customReducers, composedEnhancer);
  sagaMiddleware.run(rootSaga);

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
