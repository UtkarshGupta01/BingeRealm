import logo from "/images/Logo.png";
import {
  NavBar,
  NavUl,
  NavUlItems,
  Logo,
  Icons,
  SearchIcon,
  HamburgerIcons,
  HamburgerOpen,
  HamburgerClose,
} from "./styles/Header.styled";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Headers = ({ showSearch }) => {
  const [navbar, setNavbar] = useState("top");
  const [prevScrollVal, setPrevScrollVal] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > prevScrollVal) {
        setNavbar("hide");
      } else {
        setNavbar("show");
      }
    } else {
      setNavbar("top");
    }
    setPrevScrollVal(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [prevScrollVal]);

  const handleHeaderNavigation = (type) => {
    if (type == "home") {
      navigate(`/`);
    } else if (type == "movie") {
      navigate(`/explore/movie`);
    } else {
      navigate(`/explore/tv`);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <NavBar $setnavbar={navbar}>
      <div className="logo">
        <Logo
          src={logo}
          alt="logo"
          onClick={() => handleHeaderNavigation("home")}
        />
      </div>
      <NavUl $menuOpen={menuOpen} $setnavbar={navbar}>
        <NavUlItems onClick={() => handleHeaderNavigation("movie")}>
          Movies
        </NavUlItems>
        <NavUlItems onClick={() => handleHeaderNavigation("tv")}>
          TV Shows
        </NavUlItems>
      </NavUl>
      <Icons>
        <SearchIcon className="search-bar" onClick={() => showSearch(true)}>
          <FaSearch />
        </SearchIcon>
        <HamburgerIcons>
          <HamburgerOpen onClick={handleMenuToggle} $menuOpen={menuOpen}>
            <FaBars />
          </HamburgerOpen>
          <HamburgerClose onClick={handleMenuToggle} $menuOpen={menuOpen}>
            <FaTimes />
          </HamburgerClose>
        </HamburgerIcons>
      </Icons>
    </NavBar>
  );
};

export default Headers;
