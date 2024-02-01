import {
  SearchArea,
  SearchBar,
  SearchContainer,
  SearchIcon,
} from "./styles/Search.styled";
import { FaSearch } from "react-icons/fa";

const SearchPage = () => {
  return (
    <SearchContainer>
      <SearchArea>
        <SearchBar type="text" placeholder="Search..." />
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
      </SearchArea>
    </SearchContainer>
  );
};

export default SearchPage;
