import { routerApi } from "@/repository/Repository";

export type UserRepository = {
  register: Function,
  login: Function,
  get: Function,
  logout: Function,
};

// リポジトリは、基本的にrouter.go のルーティング内容と一致させること
export const userRepository: UserRepository = {
  register: (data: object) => {
    return routerApi.post("/signup", data); //.post(<uri>, <payload>)
  },
  login: (data: object) => {
    return routerApi.post("/signin", data); //.post(<uri>, <payload>)
  },
  get: () => {
    return routerApi.get("/user");
  },
  logout: () => {
    return routerApi.get("/signout");
  },
};
