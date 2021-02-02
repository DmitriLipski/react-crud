import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// declare module 'axios' {
//   interface AxiosResponse<T = any> extends Promise<T> {}
// }

export abstract class HttpClient {
  instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = ({ data, status }: AxiosResponse) => {
    console.log("status", status);
    return data;
  };

  protected _handleError = (error: AxiosError) => {
    console.log("error response", error.response);
    return Promise.reject(error);
  };
}
