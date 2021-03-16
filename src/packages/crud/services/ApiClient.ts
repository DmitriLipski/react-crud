import type { AxiosResponse } from "axios";

import { HttpClient } from "./HttpClient";
import type { Filter, Identifier, Options, Pagination, Sort } from "../types";

export interface HttpClientType {
  getAll<T>(resource: string, options: Options): Promise<AxiosResponse<T[]>>;
  getOne<T>(resource: string, id: Identifier): Promise<AxiosResponse<T>>;
  // resourcesMap: Record<string, string>
}

export class ApiClient extends HttpClient implements HttpClientType {
  private resourceMap: Record<string, string>;

  public constructor(baseURL: string, resourceMap: Record<string, string>) {
    super(baseURL);
    this.resourceMap = resourceMap;
  }
  public getAll<T>(
    resource: string,
    options?: Options
  ): Promise<AxiosResponse<T[]>> {
    const url = this._getResourceBaseUrl(resource);
    return this.instance.get<T[]>(url, {
      ...this._getParams({
        pagination: options?.pagination,
        filter: options?.filter,
        sort: options?.sort,
      }),
    });
  }

  public getOne<T>(
    resource: string,
    id: Identifier
  ): Promise<AxiosResponse<T>> {
    const url = `${this._getResourceBaseUrl(resource)}/${id}`;
    return this.instance.get<T>(url);
  }

  public _getResourceBaseUrl(resource: string): string {
    if (!(resource in this.resourceMap)) {
      throw new Error(`There is no "${resource}" resource`);
    }
    return this.resourceMap[resource];
  }

  public _getParams({
    pagination,
    filter,
    sort,
  }: {
    pagination?: Pagination;
    filter?: Filter;
    sort?: Sort;
  }): { params: { [key: string]: string | number } } {
    return { params: { ...pagination, ...filter, ...sort } };
  }
}
