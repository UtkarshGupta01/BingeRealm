import Hero from "./Hero/Hero";
import OngoingTv from "./Ongoing TV Shows/OngoingTv";
import Popular from "./Popular/Popular";
import TopRated from "./Top Rated/TopRated";
import Trending from "./Trending/Trending";
import Upcoming from "./Upcoming/Upcoming";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Trending></Trending>
      <OngoingTv></OngoingTv>
      <Upcoming></Upcoming>
      <Popular></Popular>
      <TopRated></TopRated>
    </>
  );
};

export default Home;
