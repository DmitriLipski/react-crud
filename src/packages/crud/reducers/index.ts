import { combineReducers } from "redux";
import { getResourceReducer } from "./resourceReducer";
import type { CustomReducersType } from "../types";

const getResourcesReducer = (resources: string[]) => {
  const reducers = resources.reduce((res, resource) => {
    return { ...res, [resource]: getResourceReducer(resource) };
  }, {});

  return combineReducers(reducers);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getRootReducer = (
  resources: string[],
  customReducers?: CustomReducersType
) => {
  return combineReducers({
    resources: getResourcesReducer(resources),
    ...customReducers,
  });
};
