import axios from "axios";
import { getData } from "./action";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  withCredentials: true,
});

export const dataAPI = {
  fetchData(dispatch) {
    api.get().then(({ data }) => {
      return dispatch(getData(data));
    }, {});
  },
};
