import logo from "/images/Logo.png";
import {
  NavBar,
  NavUl,
  NavUlItems,
  Logo,
  SearchIcon,
} from "./styles/Header.styled";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Headers = () => {
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleNavbar = () => {
      if (window.scrollY > 500) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  const handleHeaderNavigation = (type) => {
    if (type == "home") {
      navigate(`/`);
    } else if (type == "movie") {
      navigate(`/explore/movies`);
    } else if (type == "tv") {
      navigate(`/explore/tv`);
    } else {
      navigate(`/search`);
    }
  };
  return (
    <NavBar scrolling={scrolling}>
      <div className="logo">
        <Logo
          src={logo}
          alt="logo"
          onClick={() => handleHeaderNavigation("home")}
        />
      </div>
      <NavUl className="nav-list">
        <NavUlItems onClick={() => handleHeaderNavigation("movie")}>
          Movies
        </NavUlItems>
        <NavUlItems onClick={() => handleHeaderNavigation("tv")}>
          TV Shows
        </NavUlItems>
      </NavUl>
      <SearchIcon
        className="search-bar"
        onClick={() => handleHeaderNavigation("search")}
      >
        <FaSearch />
      </SearchIcon>
    </NavBar>
  );
};

export default Headers;
