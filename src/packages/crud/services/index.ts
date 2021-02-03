import { ApiClient } from "./ApiClient";

export * from "./MockApiClient";
export * from "./ApiClient";

export const API_URL = "https://jsonplaceholder.typicode.com";
const resourcesMap = {
  users: "/users",
  tasks: "/tasks",
};

export const apiClient = new ApiClient(API_URL, resourcesMap);
