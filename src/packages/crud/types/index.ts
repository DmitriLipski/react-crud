import type { Reducer } from "redux";
import type {
  GetListAction,
  GetListFailureAction,
  GetListLoadingAction,
  GetListSuccessAction,
} from "./getListTypes";
import type {
  GetOneAction,
  GetOneFailureAction,
  GetOneLoadingAction,
  GetOneSuccessAction,
} from "./getOneTypes";

export type Identifier = string | number;

export interface ResourceState {
  data: Record<Identifier, ResourceDataType>;
  ids: Array<Identifier>;
  loading: boolean;
  loaded: boolean;
  error: null | string;
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
  | GetListFailureAction
  | GetOneAction
  | GetOneLoadingAction
  | GetOneSuccessAction
  | GetOneFailureAction;
