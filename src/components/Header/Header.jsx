import logo from "/images/Logo.png";
import {
  NavBar,
  NavUl,
  NavUlItems,
  Logo,
  SearchIcon,
} from "./styles/Header.styled";
import { FaSearch } from "react-icons/fa";
import Headroom from "react-headroom";

const Headers = () => {
  return (
    <Headroom>
      <NavBar>
        <div className="logo">
          <Logo src={logo} alt="logo" />
        </div>
        <NavUl className="nav-list">
          <NavUlItems>Movies</NavUlItems>
          <NavUlItems>TV Shows</NavUlItems>
        </NavUl>
        <SearchIcon className="search-bar">
          <FaSearch />
        </SearchIcon>
      </NavBar>
    </Headroom>
  );
};

export default Headers;
