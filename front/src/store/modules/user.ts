import { Commit } from "vuex";

const state = {
  auth: false,
};

const mutations = {
  SET_AUTH: (state: { auth: boolean }, auth: boolean) => (state.auth = auth),
};

const actions = {
  // ログイン状態の管理
  //   auth: ログイン中=true, ログアウト中=false
  setAuth: ({ commit }: { commit: Commit }, auth: boolean) =>
    commit("SET_AUTH", auth),
};

export const user = {
  namespaced: true, // Vuexインスタンスの `modules` プロパティでこの外部ファイルを読み込みさせるために必要
  state,
  mutations,
  actions,
};
