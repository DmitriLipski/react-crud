import type { ResourceActionTypes, ResourceState } from "../types";
import type {
  GetListFailureAction,
  GetListSuccessAction,
} from "../types/getListTypes";
import {
  GET_LIST_LOADING,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
} from "../constants";
import { resourceDataNormalizer } from "./normalizer";

export const initialState: ResourceState = {
  data: {},
  ids: [],
  loading: false,
  loaded: false,
  error: null,
};

export const getResourceReducer = (resource: string) => {
  return (state = initialState, action: ResourceActionTypes): ResourceState => {
    if (action?.meta?.resource !== resource) {
      return state;
    }

    switch (action.type) {
      case GET_LIST_LOADING:
        return handleLoad(state);
      case GET_LIST_SUCCESS:
        return handleLoadSuccess(state, action);
      case GET_LIST_FAILURE:
        return handleLoadFailure(state, action);
      default:
        return state;
    }
  };
};

const handleLoad = (state: ResourceState): ResourceState => ({
  ...state,
  loading: true,
  error: null,
});

const handleLoadSuccess = (
  state: ResourceState,
  action: GetListSuccessAction
): ResourceState => ({
  ...state,
  ...resourceDataNormalizer(state.data, action.payload.data),
  loading: false,
  loaded: true,
});

const handleLoadFailure = (
  state: ResourceState,
  action: GetListFailureAction
) => ({
  ...state,
  loading: false,
  error: action.payload.error,
});
