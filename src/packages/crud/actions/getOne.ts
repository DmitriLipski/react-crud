import {
  GET_ONE,
  GET_ONE_FAILURE,
  GET_ONE_LOADING,
  GET_ONE_SUCCESS,
} from "../constants";
import type {
  Identifier,
  ResourceActionTypes,
  ResourceDataType,
  ResourceErrorType,
} from "../types";

export const getOne = (resource: string): ResourceActionTypes => ({
  type: GET_ONE,
  meta: { resource },
});

export const getOneLoading = (
  resource: string,
  id: Identifier
): ResourceActionTypes => ({
  type: GET_ONE_LOADING,
  payload: { id },
  meta: { resource },
});

export const getOneSuccess = (
  resource: string,
  data: ResourceDataType
): ResourceActionTypes => ({
  type: GET_ONE_SUCCESS,
  payload: { data },
  meta: { resource },
});

export const getOneFailure = (
  resource: string,
  error: ResourceErrorType
): ResourceActionTypes => ({
  type: GET_ONE_FAILURE,
  payload: { error },
  meta: { resource },
});
