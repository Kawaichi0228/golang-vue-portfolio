// リポジトリの生成
import log from 'loglevel';
import { RepositoryFactory } from "@/repository/RepositoryFactory";
const UserRepository = RepositoryFactory.get("user");

// ユーザ情報を取得
export const getUserInfo = async () => {
  const res = await UserRepository.get().catch((err: any) => {
    return err.response;
  });
  if (res.status !== 200) {
    log.warn("ユーザー情報の取得に失敗しました");
    throw new Error(res);
  }
  log.info("ユーザー情報の取得に成功しました");
  log.info(res.data);
  return res.data.data;
};
