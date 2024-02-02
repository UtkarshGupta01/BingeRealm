import { useEffect } from "react";
import "./App.css";
import Headers from "./components/Header/Header";
import Home from "./components/Home/Home";
import SearchPage from "./components/Search/Search";
import { fetchData } from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchData("/configuration").then((res) => {
      console.log(res);

      const url = {
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
