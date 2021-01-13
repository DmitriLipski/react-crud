import type { ResourceState, ResourceActionTypes } from "../types";
import { GET_LIST, GET_LIST_FAILURE, GET_LIST_SUCCESS } from "../constants";

const initialState: ResourceState = {
  data: [],
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
      case GET_LIST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_LIST_SUCCESS:
        return {
          ...state,
          data: [...state.data, ...action.payload.data],
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
