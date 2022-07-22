// ここに作成したRepositoryを全て定義する
import { taskRepository, TaskRepository } from "@/repository/taskRepository";
import { userRepository, UserRepository } from "@/repository/userRepository";

type Repositories = {
  task: TaskRepository,
  user: UserRepository
};

const repositories: Repositories = {
  // ここに作成したRepositoryを全て定義する
  task: taskRepository,
  user: userRepository,
};

// ファクトリーメソッド(リポジトリ生成メソッド)
export const repositoryFactory = {
  // @ts-ignore
  get: (name: string) => repositories[name],
};
