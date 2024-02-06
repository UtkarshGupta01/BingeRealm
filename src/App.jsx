import { useEffect, useState } from "react";
import "./App.css";
import Headers from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SearchPage from "./components/Search/Search";
import { fetchData } from "./utils/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Details from "./pages/Details/Details";
import Explore from "./pages/Explore/Explore";
import SearchedResult from "./pages/SearchedResults/SearchedResult";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const [search, setSearch] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchData("/configuration").then((res) => {
      const url = {
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endpoints = ["tv", "movie"];
    let allGenres = {};

    endpoints.forEach((url) => {
      promises.push(fetchData(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };

  const showSearch = (data) => {
    if (data) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  return (
    <Router>
      <Headers showSearch={showSearch} />
      {search ? <SearchPage showSearch={showSearch} /> : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/search/:query" element={<SearchedResult />} />
        <Route path="/?#@*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
