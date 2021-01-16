import { GET_LIST, GET_LIST_FAILURE, GET_LIST_SUCCESS } from "../constants";
import type {
  ResourceActionTypes,
  ResourceDataType,
  ResourceErrorType,
} from "../types";

export const getList = (resource: string): ResourceActionTypes => ({
  type: GET_LIST,
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
