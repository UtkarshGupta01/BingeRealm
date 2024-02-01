import axios from "react-axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchData = async (url, parameters) => {
  try {
    const { data } = await axios.Get(BASE_URL + url, {
      headers,
      parameters
    })
    return data;

  } catch (error) {
    console.log(error);
    return error;

  }

}