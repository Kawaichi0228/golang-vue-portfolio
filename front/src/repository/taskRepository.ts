import { routerApi } from "@/repository/Repository";

export type TaskRepository = {
  getAll: Function,
  create: Function,
  get: Function,
  update: Function,
  delete: Function,
};

const resource = "/task";

// リポジトリは、基本的にrouter.go のルーティング内容と一致させること
export const taskRepository: TaskRepository = {
  getAll: () => {
    return routerApi.get(`${resource}`);
  },
  create: (data: object) => {
    return routerApi.post(`${resource}`, data);
  },
  get: (id: number) => {
    return routerApi.get(`${resource}/${id}`);
  },
  update: (id: number, data: object) => {
    return routerApi.put(`${resource}/${id}`, data);
  },
  delete: (id: number) => {
    return routerApi.delete(`${resource}/${id}`);
  },
};
