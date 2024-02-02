import heroDemo from "/gif/hero_demo.mp4";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeroContainer,
  HeroVid,
  Welcome,
  WelcomeArea,
  WelcomeMsg,
  SearchArea,
  SearchBar,
  SearchIcon,
} from "./styles/Hero.styled";
import { FaSearch } from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";

const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");

  const handleSearchData = (event) => {
    if (event.key == "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <HeroContainer>
      <HeroVid src={heroDemo} autoPlay loop muted />
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
            placeholder="Search any movie or tv show..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleSearchData}
          />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </SearchArea>
      </WelcomeArea>
    </HeroContainer>
  );
};

export default Hero;
