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

export interface ResourceState<T = any> {
  data: Record<Identifier, T>;
  ids: Array<Identifier>;
  loading: boolean;
  loaded: boolean;
  error: null | string;
}

export interface State {
  resources: Record<string, ResourceState>;
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

export type ResourceGetListActionTypes =
  | GetListAction
  | GetListLoadingAction
  | GetListSuccessAction
  | GetListFailureAction;

export type ResourceGetOneActionTypes =
  | GetOneAction
  | GetOneLoadingAction
  | GetOneSuccessAction
  | GetOneFailureAction;

export type Pagination = { page: number; size: number };

export type Filter = { [key: string]: string | number };

export type Sort = { field: string; order: "ASC" | "DESC" };

export type Options = { pagination?: Pagination; filter?: Filter; sort?: Sort };
