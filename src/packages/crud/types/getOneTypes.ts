import type {
  GET_ONE,
  GET_ONE_LOADING,
  GET_ONE_SUCCESS,
  GET_ONE_FAILURE,
} from "../constants";
import type { Identifier, ResourceDataType, ResourceErrorType } from "./index";

export interface GetOneAction {
  type: typeof GET_ONE;
  meta: { resource: string };
}

export interface GetOneLoadingAction {
  type: typeof GET_ONE_LOADING;
  payload: { id: Identifier };
  meta: { resource: string };
}

export interface GetOneSuccessAction {
  type: typeof GET_ONE_SUCCESS;
  payload: { data: ResourceDataType };
  meta: { resource: string };
}

export interface GetOneFailureAction {
  type: typeof GET_ONE_FAILURE;
  payload: { error: ResourceErrorType };
  meta: { resource: string };
}
