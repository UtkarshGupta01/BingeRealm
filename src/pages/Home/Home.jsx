import Hero from "./Hero/Hero";
import Popular from "./Popular/Popular";
import TopRated from "./Top Rated/TopRated";
import Trending from "./Trending/Trending";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Trending></Trending>
      <Popular></Popular>
      <TopRated></TopRated>
    </>
  );
};

export default Home;
