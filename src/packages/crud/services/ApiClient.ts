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
  private resources: Array<string>;

  public constructor(baseURL: string, resources: Array<string>) {
    super(baseURL);
    this.resources = resources;
  }
  public getAll<T>(resource: string): Promise<AxiosResponse<T[]>> {
    const url = `/${resource}`;
    return this.instance.get<T[]>(url);
  }

  public getOne<T>(
    resource: string,
    id: Identifier
  ): Promise<AxiosResponse<T>> {
    const url = `/${resource}/${id}`;
    return this.instance.get<T>(url);
  }
}

export const apiClient = new ApiClient(API, ["users", "tasks"]);
