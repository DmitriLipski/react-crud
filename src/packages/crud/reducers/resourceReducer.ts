import type { ResourceActionTypes, ResourceState } from "../types";
import {
  GET_LIST_FAILURE,
  GET_LIST_LOADING,
  GET_LIST_SUCCESS,
} from "../constants";
import { resourceDataNormalizer } from "./normalizer";

export const initialState: ResourceState = {
  data: {},
  ids: [],
  loading: false,
  error: null,
};

export const getResourceReducer = (resource: string) => {
  return (state = initialState, action: ResourceActionTypes): ResourceState => {
    if (action?.meta?.resource !== resource) {
      return state;
    }

    switch (action.type) {
      case GET_LIST_LOADING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_LIST_SUCCESS:
        return {
          ...state,
          data: resourceDataNormalizer(state.data, action.payload.data),
          loading: false,
        };
      case GET_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
};
