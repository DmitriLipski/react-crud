import { combineReducers } from "redux";
import { getResourceReducer } from "./resourceReducer";

const getResourcesReducer = (resources: string[]) => {
  const reducers = resources.reduce((res, resource) => {
    return { ...res, [resource]: getResourceReducer(resource) };
  }, {});

  return combineReducers(reducers);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getRootReducer = (resources: string[]) => {
  return combineReducers({
    resources: getResourcesReducer(resources),
  });
};
