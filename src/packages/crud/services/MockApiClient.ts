import type { Identifier } from "../types";

export class MockApiClient {
  data: Record<string, Array<any>> = {
    users: [
      {
        id: 1,
        name: "Dima",
      },
      {
        id: 2,
        name: "Roma",
      },
    ],
    tasks: [
      {
        id: 1,
        title: "Learn NodeJs",
        userId: 1,
      },
      {
        id: 2,
        title: "Learn Rust",
        userId: 2,
      },
    ],
  };

  getAll(resourceUrl: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.3
          ? resolve(this.data[resourceUrl])
          : reject("Something went wrong...");
      }, 2000);
    });
  }

  getOne(resourceUrl: string, id: Identifier) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const resource = this.data[resourceUrl].find((elem) => elem.id === id);
        Math.random() > 0.3
          ? resolve(resource)
          : reject("Something went wrong...");
      }, 2000);
    });
  }
}
