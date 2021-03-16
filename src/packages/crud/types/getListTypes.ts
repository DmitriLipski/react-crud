import type {
  GET_LIST,
  GET_LIST_FAILURE,
  GET_LIST_LOADING,
  GET_LIST_SUCCESS,
} from "../constants";
import type {
  Filter,
  Pagination,
  ResourceDataType,
  ResourceErrorType,
} from "./index";

export interface GetListAction {
  type: typeof GET_LIST;
  payload: { pagination?: Pagination; filter?: Filter };
  meta: { resource: string };
}

export interface GetListLoadingAction {
  type: typeof GET_LIST_LOADING;
  payload: { loading: boolean };
  meta: { resource: string };
}

export interface GetListSuccessAction {
  type: typeof GET_LIST_SUCCESS;
  payload: { data: Array<ResourceDataType> };
  meta: { resource: string };
}

export interface GetListFailureAction {
  type: typeof GET_LIST_FAILURE;
  payload: { error: ResourceErrorType };
  meta: { resource: string };
}
