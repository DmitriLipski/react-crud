import { createStore, Store, StoreEnhancer } from "redux";

import { getRootReducer } from "./reducers";

import type { CustomReducersType } from "./types";

export const getStore = (
  resources: string[],
  customReducers?: CustomReducersType,
  composedEnhancer?: StoreEnhancer
): Store => {
  return createStore(
    getRootReducer(resources, customReducers),
    composedEnhancer
  );
};
