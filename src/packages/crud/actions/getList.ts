import {
  GET_LIST,
  GET_LIST_LOADING,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
} from "../constants";
import type {
  Options,
  ResourceActionTypes,
  ResourceDataType,
  ResourceErrorType,
} from "../types";

export const getList = (
  resource: string,
  options?: Options
): ResourceActionTypes => ({
  type: GET_LIST,
  payload: { ...options },
  meta: { resource },
});

export const getListLoading = (resource: string): ResourceActionTypes => ({
  type: GET_LIST_LOADING,
  payload: { loading: true },
  meta: { resource },
});

export const getListSuccess = (
  resource: string,
  data: Array<ResourceDataType>
): ResourceActionTypes => ({
  type: GET_LIST_SUCCESS,
  payload: { data },
  meta: { resource },
});

export const getListFailure = (
  resource: string,
  error: ResourceErrorType
): ResourceActionTypes => ({
  type: GET_LIST_FAILURE,
  payload: { error },
  meta: { resource },
});
