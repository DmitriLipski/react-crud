import type { AxiosResponse } from "axios";

export const API = "https://jsonplaceholder.typicode.com";

import { HttpClient } from "./HttpClient";
import type { Identifier } from "../types";

export interface HttpClientType {
  getAll<T>(resource: string): Promise<AxiosResponse<T[]>>;
  getOne<T>(resource: string, id: Identifier): Promise<AxiosResponse<T>>;
  // resourcesMap: Record<string, string>
}

export class ApiClient extends HttpClient implements HttpClientType {
  private resourceMap: Record<string, string>;

  public constructor(baseURL: string, resourceMap: Record<string, string>) {
    super(baseURL);
    this.resourceMap = resourceMap;
  }
  public getAll<T>(resource: string): Promise<AxiosResponse<T[]>> {
    const url = this._getResourceBaseUrl(resource);
    return this.instance.get<T[]>(url);
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
}
const resourcesMap = {
  users: "/users",
  tasks: "/tasks",
};

export const apiClient = new ApiClient(API, resourcesMap);
