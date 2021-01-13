import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getRootReducer } from "./reducers";
import logger from "redux-logger";

const composedEnhancer = composeWithDevTools(applyMiddleware(logger));

export const getStore = (resources: string[]): Store => {
  return createStore(getRootReducer(resources), composedEnhancer);
};
