import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeroContainer,
  Welcome,
  WelcomeArea,
  WelcomeMsg,
  SearchArea,
  SearchBar,
  SearchIcon,
  HeroImg,
  MergeLayer,
} from "./styles/Hero.styled";
import { FaSearch } from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

const Hero = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const currentDate = new Date().toISOString().split("T")[0];
  const futureDate = new Date(
    new Date().setFullYear(new Date().getFullYear() + 2)
  )
    .toISOString()
    .split("T")[0];

  const { data, loading } = useFetch(
    `/discover/movie?primary_release_date.gte=${currentDate}&primary_release_date.lte=${futureDate}&language=en-US&sort_by=popularity.desc&page=1`
  );

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const handleSearchData = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSearchData();
    }
  };

  return (
    <HeroContainer>
      <HeroImg src={background} />
      <WelcomeArea>
        <Welcome>
          Welcome to Binge<font color="red">Verse</font>
        </Welcome>
        <WelcomeMsg>
          Grab your snacks, hit play, and let the binge-watching therapy session
          begin!
        </WelcomeMsg>
        <SearchArea>
          <SearchBar
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <SearchIcon onClick={handleSearchData}>
            <FaSearch />
          </SearchIcon>
        </SearchArea>
      </WelcomeArea>
      <MergeLayer />
    </HeroContainer>
  );
};

export default Hero;
