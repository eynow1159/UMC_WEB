import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_TOKEN}`,
  },
});