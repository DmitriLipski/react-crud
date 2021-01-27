import type { ResourceActionTypes, ResourceState } from "../types";
import {
  GET_LIST_FAILURE,
  GET_LIST_LOADING,
  GET_LIST_SUCCESS,
  GET_ONE_FAILURE,
  GET_ONE_LOADING,
  GET_ONE_SUCCESS,
} from "../constants";
import {
  getListResourceDataNormalizer,
  getOneResourceDataNormalizer,
} from "./normalizer";
import type {
  GetListFailureAction,
  GetListSuccessAction,
} from "../types/getListTypes";
import type {
  GetOneSuccessAction,
  GetOneFailureAction,
} from "../types/getOneTypes";

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
        return handleLoading(state);
      case GET_LIST_SUCCESS:
        return handleLoadListSuccess(state, action as GetListSuccessAction);
      case GET_LIST_FAILURE:
        return handleLoadListFailure(state, action);

      case GET_ONE_LOADING:
        return handleLoading(state);
      case GET_ONE_SUCCESS:
        return handleLoadOneSuccess(state, action);
      case GET_ONE_FAILURE:
        return handleLoadOneFailure(state, action);
      default:
        return state;
    }
  };
};

const handleLoading = (state: ResourceState): ResourceState => ({
  ...state,
  loading: true,
  error: null,
});

const handleLoadListSuccess = (
  state: ResourceState,
  action: GetListSuccessAction
): ResourceState => ({
  ...state,
  ...getListResourceDataNormalizer(state.data, action.payload.data),
  loading: false,
  loaded: true,
});

const handleLoadListFailure = (
  state: ResourceState,
  action: GetListFailureAction
) => ({
  ...state,
  loading: false,
  error: action.payload.error,
});

//GET_ONE

const handleLoadOneSuccess = (
  state: ResourceState,
  action: GetOneSuccessAction
): ResourceState => ({
  ...state,
  ...getOneResourceDataNormalizer(state.data, state.ids, action.payload.data),
  loading: false,
  loaded: true,
});

const handleLoadOneFailure = (
  state: ResourceState,
  action: GetOneFailureAction
) => ({
  ...state,
  loading: false,
  error: action.payload.error,
});
