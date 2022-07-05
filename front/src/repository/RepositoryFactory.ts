// ここに作成したRepositoryを全て定義する
import { TaskRepository } from "@/repository/taskRepository";
import { UserRepository } from "@/repository/userRepository";

const repositories = {
  // ここに作成したRepositoryを全て定義する
  task: TaskRepository,
  user: UserRepository,
};

// ファクトリーメソッド(リポジトリ生成メソッド)
export const RepositoryFactory = {
  // @ts-ignore
  get: (name: any) => repositories[name],
};
