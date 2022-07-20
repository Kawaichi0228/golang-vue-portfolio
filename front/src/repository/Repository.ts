import axios from "axios";

const baseDomain = "https://golang-vue-portfolio.herokuapp.com";
//const baseDomain = "http://localhost:8080";
const baseURL = `${baseDomain}/api/v1`;
//const baseURL = "/api/v1";

// baseURLを持ったルーターグループを作成
export const routerApi = axios.create({
  baseURL: baseURL,
});
