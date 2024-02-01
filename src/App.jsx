import { useEffect } from "react";
import "./App.css";
import Headers from "./components/Header/Header";
import Home from "./components/Home/Home";
import SearchPage from "./components/Search/Search";
import { fetchData } from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    apitesting();
  }, []);

  const apitesting = () => {
    fetchData("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return (
    // <BrowserRouter>
    //   <Routes>
    //   </Routes>
    // </BrowserRouter>
    <>
      <Headers></Headers>
      <Home></Home>
      {/* <SearchPage></SearchPage> */}
    </>
  );
}

export default App;
