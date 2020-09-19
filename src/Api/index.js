import axios from "axios";
const apiKey = "8b47da7b";
const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

const instance = axios.create({
  baseURL: url,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => {
    return Object.entries(Object.assign({}, params))
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  },
});

export default {
  getMovies: ({ params }) =>
    instance({
      method: "GET",
      params: { ...params },
    }),
  getMoviesDetails: (id) =>
    instance({
      method: "GET",
      params: { i: id },
    }),
};
