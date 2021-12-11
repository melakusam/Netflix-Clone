import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
//// when we say instance.get("/movie/top_rated");
////// it is really do this https://api.themoviedb.org/3/movie/top_rated

export default instance;

/////usually the name of the file/module is also the name of the funcion and that also have been we export. any reason here? why not const axios and export axios?

