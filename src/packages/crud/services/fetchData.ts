import axios, { AxiosResponse } from "axios";

export const API = "https://jsonplaceholder.typicode.com";

export const apiClient = {
  fetchData: async function <T>(resource: string): Promise<T> {
    const url = `${API}/${resource}`;
    return await axios.get(url);
  },
};

// export async function fetchData<T>(resource: string): Promise<T> {
//   const url = `${API}/${resource}`;
//   return await axios.get(url)
// }
