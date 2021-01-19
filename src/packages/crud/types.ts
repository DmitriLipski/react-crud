import type {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
  GET_LIST_LOADING,
} from "./constants";
import type { Reducer } from "redux";

export type Identifier = string | number;

export interface ResourceState {
  data: Record<Identifier, ResourceDataType>;
  ids: Array<Identifier>;
  loading: boolean;
  error: null | string;
}

interface GetListAction {
  type: typeof GET_LIST;
  meta: { resource: string };
}

interface GetListLoadingAction {
  type: typeof GET_LIST_LOADING;
  payload: { loading: boolean };
  meta: { resource: string };
}

interface GetListSuccessAction {
  type: typeof GET_LIST_SUCCESS;
  payload: { data: Array<ResourceDataType> };
  meta: { resource: string };
}

interface GetListFailureAction {
  type: typeof GET_LIST_FAILURE;
  payload: { error: ResourceErrorType };
  meta: { resource: string };
}

export type ResourceDataType = {
  id: Identifier;
  [key: string]: string | number | boolean;
};

export type ResourceErrorType = null | string;

export type CustomReducersType = Record<string, Reducer>;

export type ResourceActionTypes =
  | GetListAction
  | GetListLoadingAction
  | GetListSuccessAction
  | GetListFailureAction;
