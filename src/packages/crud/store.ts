import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getRootReducer } from "./reducers";
import logger from "redux-logger";
import type { CustomReducersType } from "./types";

const composedEnhancer = composeWithDevTools(applyMiddleware(logger));

export const getStore = (
  resources: string[],
  customReducers?: CustomReducersType
): Store => {
  return createStore(
    getRootReducer(resources, customReducers),
    composedEnhancer
  );
};
